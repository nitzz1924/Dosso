import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Input,
  Button,
  Form,
  FormGroup,
} from "reactstrap"
import withRouter from "components/Common/withRouter"
import { useFormik } from "formik"
import * as Yup from "yup"
import Dropzone from "react-dropzone"
import { Link , useNavigate } from "react-router-dom"
import config from "constants/config"
import { getLocalData } from "services/global-storage"
import swal from 'sweetalert';
const Playerkyc = () => {
  document.title = "Player KYC"
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([])
  const [selectedPanFiles, setSelectedPanFiles] = useState([])
  const [selectStdIdFiles, setSelectStdIdFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const validationSchema = Yup.object().shape({
    playerType: Yup.string().required("Player type is required"),
    aadhaar: Yup.string().required("Aadhaar number is required"),
    pannumber: Yup.string().required("PAN number is required"),
    gstnumber: Yup.string().when("playerType", {
      is: "business",
      then: Yup.string().required("GST number is required"),
      otherwise: Yup.string(),
    }),
    studentid: Yup.string().when("playerType", {
      is: "student",
      then: Yup.string().required("Student ID is required"),
      otherwise: Yup.string(),
    }),
    accnumber: Yup.string().required("Account number is required"),
    accname: Yup.string().required("Account holder name is required"),
    ifsccode: Yup.string().required("IFSC code is required"),
  })

  const formik = useFormik({
    initialValues: {
      playerType: "individual",
      studentimg: [],
      aadhaar: "",
      pannumber: "",
      gstnumber: "",
      studentid: "",
      accnumber: "",
      accname: "",
      ifsccode: "",
      aadhaarimg: [],
      panimg: [],
      playerid: getLocalData("userId"),
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values)
      const formData = new FormData()
      for (const key in values) {
        if (key === "studentimg") {
          values[key].forEach(file => {
            formData.append("studentimg[]", file)
          })
        } else {
          formData.append(key, values[key])
        }
        if (key === "aadhaarimg") {
          values[key].forEach(file => {
            formData.append("aadhaarimg[]", file)
          })
        } else {
          formData.append(key, values[key])
        }
        if (key === "panimg") {
          values[key].forEach(file => {
            formData.append("panimg[]", file)
          })
        } else {
          formData.append(key, values[key])
        }
      }
      // Submit the form data to the server
      fetch(config.apiUrl + "insertkyc", {
        method: "POST",
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          swal("Great!", "Your KYC had successfully Inserted!", "success")
          .then(() => {
            navigate('/myWallet');
          });
        })
        .catch(error => {
          console.error("Error:", error)
          // handle error
        })
    },
  })

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setSelectedFiles(files)
    formik.setFieldValue("aadhaarimg", files)
  }

  function handleStdIdFiles(files) {
    console.log(files)
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setSelectStdIdFiles(files)
    formik.setFieldValue("studentimg", files)
  }

  function handlePANFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setSelectedPanFiles(files)
    formik.setFieldValue("panimg", files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <div className="page-content">
      <Container fluid>
        <Row className="my-2 justify-content-center">
          <Col lg="6" className="d-grid align-content-center p-0">
            <Card>
              <CardBody>
                <Form className="form-vertical" onSubmit={formik.handleSubmit}>
                  {submitted && (
                    <div className="text-center mt-3 text-success">
                      Your KYC verification will be done in 24 hours.
                    </div>
                  )}
                  <div className="d-flex justify-content-center ">
                    <FormGroup>
                      <Label for="playerType">Select Player Type</Label>
                      <Input
                        id="playerType"
                        name="playerType"
                        type="select"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.playerType}
                      >
                        <option value="">Select Player Type</option>
                        <option value="individual">Individual</option>
                        <option value="student">Student</option>
                        <option value="business">Business</option>
                      </Input>
                      {formik.touched.playerType && formik.errors.playerType ? (
                        <div className="text-danger">
                          {formik.errors.playerType}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>

                  {formik.values.playerType === "business" && (
                    <div className="form-group bg-light shadow-sm mt-2 mb-4 rounded-3 p-3">
                      <Label className="form-label">GST Number</Label>
                      <Input
                        name="gstnumber"
                        className="form-control border"
                        placeholder="Enter Your GST Number"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gstnumber}
                      />
                      {formik.touched.gstnumber && formik.errors.gstnumber ? (
                        <div className="text-danger">
                          {formik.errors.gstnumber}
                        </div>
                      ) : null}
                    </div>
                  )}

                  {formik.values.playerType === "student" && (
                    <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                      <Label className="form-label">Student ID</Label>
                      <Input
                        name="studentid"
                        className="form-control border"
                        placeholder="Enter Your Student ID"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.studentid}
                      />
                      {formik.touched.studentid && formik.errors.studentid ? (
                        <div className="text-danger">
                          {formik.errors.studentid}
                        </div>
                      ) : null}

                      <div
                        className="mt-3 mb-2 form-label"
                        style={{ fontSize: "12px" }}
                      >
                        Upload Student ID
                      </div>

                      <Dropzone
                        onDrop={acceptedFiles => {
                          handleStdIdFiles(acceptedFiles)
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone mb-3">
                            <div
                              className="dz-message needsclick mt-2"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="mb-1">
                                <i className="display-4 text-muted bx bxs-cloud-upload" />
                              </div>
                              <h6> Tap to upload</h6>
                            </div>
                          </div>
                        )}
                      </Dropzone>

                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {selectStdIdFiles.map((f, i) => {
                          return (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={i + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={f.name}
                                      src={f.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {f.name}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                    <Label className="form-label">Aadhaar Card Number</Label>
                    <Input
                      name="aadhaar"
                      className="form-control border"
                      placeholder="Enter aadhaar number"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.aadhaar}
                    />
                    {formik.touched.aadhaar && formik.errors.aadhaar ? (
                      <div className="text-danger">{formik.errors.aadhaar}</div>
                    ) : null}

                    <div
                      className="mt-3 mb-2 form-label"
                      style={{ fontSize: "12px" }}
                    >
                      Upload Aadhaar card Image
                    </div>
                    <Dropzone
                      onDrop={acceptedFiles => {
                        handleAcceptedFiles(acceptedFiles)
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone mb-3">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-1">
                              <i className="display-4 text-muted bx bxs-cloud-upload" />
                            </div>
                            <h6> Tap to upload</h6>
                          </div>
                        </div>
                      )}
                    </Dropzone>

                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>

                  <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                    <Label className="form-label">PAN Card Number</Label>
                    <Input
                      name="pannumber"
                      className="form-control border"
                      placeholder="Enter PAN card number"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pannumber}
                    />
                    {formik.touched.pannumber && formik.errors.pannumber ? (
                      <div className="text-danger">
                        {formik.errors.pannumber}
                      </div>
                    ) : null}

                    <div
                      className="mt-3 mb-2 form-label"
                      style={{ fontSize: "12px" }}
                    >
                      Upload PAN card Image
                    </div>
                    <Dropzone
                      onDrop={acceptedFiles => {
                        handlePANFiles(acceptedFiles)
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone mb-3">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-1">
                              <i className="display-4 text-muted bx bxs-cloud-upload" />
                            </div>
                            <h6> Tap to upload</h6>
                          </div>
                        </div>
                      )}
                    </Dropzone>

                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedPanFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>

                  <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                    <Label className="form-label">Account Number</Label>
                    <Input
                      name="accnumber"
                      className="form-control border"
                      placeholder="Enter Account number"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.accnumber}
                    />
                    {formik.touched.accnumber && formik.errors.accnumber ? (
                      <div className="text-danger">
                        {formik.errors.accnumber}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                    <Label className="form-label">Account Holder Name</Label>
                    <Input
                      name="accname"
                      className="form-control border"
                      placeholder="Enter Account holder name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.accname}
                    />
                    {formik.touched.accname && formik.errors.accname ? (
                      <div className="text-danger">{formik.errors.accname}</div>
                    ) : null}
                  </div>

                  <div className="form-group bg-light shadow-sm mt-3 mb-4 rounded-3 p-3">
                    <Label className="form-label">IFSC Code</Label>
                    <Input
                      name="ifsccode"
                      className="form-control border"
                      placeholder="Enter IFSC code"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ifsccode}
                    />
                    {formik.touched.ifsccode && formik.errors.ifsccode ? (
                      <div className="text-danger">
                        {formik.errors.ifsccode}
                      </div>
                    ) : null}
                  </div>

                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(Playerkyc)
