import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";
import config from "constants/config"

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "components/Common/withRouter";
import axios from "axios"; // Assuming axios is used for API calls
import Swal from "sweetalert2"; // Assuming Swal is used for alerts

let avatar = "../../Assets/images/Dosso21-logo-new.webp";
// actions
import { editProfile, resetProfileFlag, registerUser } from "store/actions";
import { Link, useNavigate } from "react-router-dom";
import { getLocalData, storeLocalData } from "services/global-storage";
import Dropzone from "react-dropzone";

const UserProfile = () => {
  //meta title
  document.title = "My Profile";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [user, setUser] = useState("");
  const [idx, setIdx] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);

  const { error, success } = useSelector((state) => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      studentname: name || "",
      idx: idx || "",
    },
    validationSchema: Yup.object({
      studentname: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      updateProfile(values);
    },
  });

  const handleAcceptedFile = (files) => {
    const file = files[0];
    if (file) {
      const formattedFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      });
      setSelectedFile(formattedFile);
    }
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
      "Bytes",
      "KB",
      "MB",
      "GB",
      "TB",
      "PB",
      "EB",
      "ZB",
      "YB",
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const updateProfile = async (values) => {
    try {
      const formData = new FormData();
      formData.append('studentname', values.studentname);
      formData.append('idx', idx);
      if (selectedFile) {
        formData.append('profileImage', selectedFile);
      }
  
      const response = await axios.post(`${config.apiUrl}studentupdate/${idx}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      Swal.fire("Great!", "Your Profile has been updated!", "success").then(() => {
        console.log("returned data", response.data)
        storeLocalData("authUser", JSON.stringify(response.data))
        window.location.reload(); // Navigate to profile page or wherever needed
      });
  
    } catch (error) {
      Swal.fire("Oops!", "Something went wrong with the profile update. Please try again.", "error");
      console.error('Profile update error:', error.response ? error.response.data : error.message); // Log the error
    }
  };
  

  useEffect(() => {
    if (getLocalData("authUser")) {
      const obj = JSON.parse(getLocalData("authUser"));
      console.log("profile data", obj);
      setName(obj.studentname);
      setEmail(obj.emailaddress);
      setUser(obj.username);
      setIdx(obj.id);
      setProfileImage(obj.studentprofile);

      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [dispatch, success]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row className="my-2 justify-content-center">
            <Col lg="6">
              {error && <Alert color="danger">{error}</Alert>}
              {success && <Alert color="success">{success}</Alert>}

              <Card>
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={config.publicurl + 'profiles/' + profileImage}
                        alt="profileImage"
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-dark">
                        <h5 className="text-capitalize fw-bold">{name}</h5>
                        <p className="mb-1">User ID: {user}</p>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Player ID: #{idx}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="6">
              <h4 className="card-title mb-4">Edit Profile</h4>
              <Card>
                <CardBody>
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <div className="form-group">
                      <Label className="form-label">User Name</Label>
                      <Input
                        name="studentname"
                        className="form-control border"
                        placeholder="Enter Student Name"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.studentname || ""}
                        invalid={
                          validation.touched.studentname &&
                          validation.errors.studentname
                        }
                      />
                      {validation.touched.studentname &&
                      validation.errors.studentname ? (
                        <FormFeedback type="invalid">
                          {validation.errors.studentname}
                        </FormFeedback>
                      ) : null}
                      <Input name="idx" value={idx} type="hidden" />
                    </div>

                    <div className="form-group">
                      <Label className="col-form-label col-lg-2">
                        Attached File
                      </Label>
                      <Dropzone
                        onDrop={(acceptedFiles) => handleAcceptedFile(acceptedFiles)}
                        multiple={false}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <h4>Tap to upload.</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div className="dropzone-previews mt-3" id="file-previews">
                        {selectedFile && (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={selectedFile.name}
                                    src={selectedFile.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {selectedFile.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{selectedFile.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        )}
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <Button type="submit" color="light">
                        Update 
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
