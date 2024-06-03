import PropTypes from "prop-types"
import React, { useState } from "react"
import axios from "axios"
import config from "constants/config"
import OTPInput from "react-otp-input"
import {
  Row,
  Col,
  Alert,
  Card,
  CardBody,
  Container,
  Input,
  Label,
  Form,
  Spinner,
} from "reactstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { useFormik } from "formik"
import Swal from "sweetalert2"
let logo = "../../Assets/images/Dosso21-logo-new.webp"

const ForgetPasswordPage = props => {
  const navigate = useNavigate()
  document.title = "Forget Password"
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showOTPInput, setShowOTPInput] = useState(false)
  const [showMobileNumber, setShowMobileNumber] = useState(true)
  const [showchangepassInput, setshowchangepassInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState(0)
  const [enteredOTP, setEnteredOTP] = useState("")
  const dispatch = useDispatch()

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      referral: "0001ADMIN",
      mobilenumber: "",
    },
    validate: values => {
      const errors = {}

      // Email validation
      if (!values.email) {
        errors.email = "Please Enter Valid Email"
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address"
      }

      // Password validation
      if (!values.password) {
        errors.password = "Required"
      } else if (values.password.length < 5) {
        errors.password = "Password must be at least 5 characters long"
      }

      // Mobile number validation (assuming it should be exactly 10 digits)
      if (!values.mobilenumber) {
        errors.mobilenumber = "Please Enter 10 Digit Number"
      } else if (!/^\d{10}$/i.test(values.mobilenumber)) {
        errors.mobilenumber = "Mobile number must be 10 digits"
      }

      return errors
    },
  })

  const { isValid } = validation

  const { forgetError, forgetSuccessMsg } = useSelector(state => ({
    forgetError: state.ForgetPassword.forgetError,
    forgetSuccessMsg: state.ForgetPassword.forgetSuccessMsg,
  }))

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value)
  }

  const handleProceed = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        `${config.apiUrl}verifyotp`,
        { number: phoneNumber }, // Ensure the field name matches what the backend expects
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      const { success, OTP, message } = response.data

      if (success) {
        console.log("OTP:", response)
        setOtp(OTP)
        setShowOTPInput(true)
        setShowMobileNumber(false)
      } else {
        console.error("Error:", response)
      }
    } catch (error) {
      console.error("There was an error!", error)
    } finally {
      setLoading(false)
    }
  }

  const handleOTPChange = otp => {
    setEnteredOTP(otp)
  }
  const updatePassword = () => {

    const newPassword = document.querySelector(
      'input[name="newpassword"]'
    ).value
    const confirmPassword = document.querySelector(
      'input[name="confirmpassword"]'
    ).value
    console.log(
      "New Pass : " + newPassword + "Confirm Pass : " + confirmPassword
    )
    if (newPassword !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match.", "error")
      return
    }
    try {
      const dataList = []
      dataList.push({
        newpassword: newPassword,
        username: phoneNumber,
      })
      console.log("New Data : ", dataList)
      axios.post(config.apiUrl + 'changepassword', dataList[0], {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((response) => {
          console.log("Response : ", response);
          Swal.fire("Great!", "Password Updated..!!!!!", "success")
            .then(() => {
              navigate('/login');
            });
        })
        .catch((error) => {
          Swal.fire("Oops!", "Something went wrong with the registration. Please try again.", "error");
        });

    } catch (error) {
      console.error("Error in changepassword:", error)
      Swal.fire(
        "Error",
        "There was an error processing your request. Please try again.",
        "error"
      )
    }
  }
  if (loading) {
    return <div>
      <Spinner
        color="secondary"
        type="grow"
      >
        Loading...
      </Spinner>
    </div>
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div
        className="account-pages d-grid align-items-center"
        style={{ height: "100vh", backgroundColor: "rgb(236, 236, 236)" }}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="border-bottom">
                  <Row>
                    <Col xs={7}>
                      <div className="text-secondary p-4">
                        <h5 className="text-black">Forgot Password?</h5>
                        <p>Enter Phone Number to recover.</p>
                      </div>
                    </Col>
                    <Col className="col-5 text-center align-self-end">
                      <img src={logo} alt="" className="" height="110" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="">
                  <div className="p-2">
                    {forgetError && forgetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {forgetError}
                      </Alert>
                    ) : null}
                    {forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {forgetSuccessMsg}
                      </Alert>
                    ) : null}

                    {showMobileNumber && (
                      <Form
                        className="form-horizontal"
                        onSubmit={handleProceed}
                      >
                        <div className="mb-3">
                          <Label className="form-label text-black">
                            Enter Phone Number
                          </Label>
                          <Input
                            name="phonenumber"
                            className="form-control"
                            placeholder="enter your phone number"
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                          />
                        </div>
                        <Row className="mb-3">
                          <Col className="text-center">
                            <button
                              className="btn btn-light w-md text-black"
                              type="submit"
                            >
                              Proceed
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    )}

                    {showOTPInput && (
                      <Form>
                        <div
                          id="otpinput"
                          className="mt-4 text-center d-grid justify-content-center "
                        >
                          <Label className="form-label text-black">
                            Enter OTP
                          </Label>
                          <OTPInput
                            value={enteredOTP}
                            onChange={handleOTPChange}
                            numInputs={6}
                            separator={<span style={{ width: "8px" }}>-</span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            renderInput={props => <input {...props} />}
                            inputStyle={{
                              border: "1px solid #000",
                              borderRadius: "5px",
                              width: "40px",
                              height: "40px",
                              fontSize: "16px",
                              color: "#000",
                              fontWeight: "500",
                              caretColor: "#000",
                              margin: "2px",
                              backgroundColor: "white",
                            }}
                            focusStyle={{
                              border: "1px solid golden",
                              outline: "none",
                              color: "#D5A24A",
                              backgroundColor: "#222",
                            }}
                          />
                          <div className="mt-2 d-grid">
                            <button
                              className="btn btn-dark btn-block text-uppercase fw-bold"
                              type="button"
                              onClick={() => {
                                if (isValid && showOTPInput) {
                                  if (Number(otp) === Number(enteredOTP)) {
                                    setshowchangepassInput(true)
                                    setShowOTPInput(false)
                                  }
                                  console.log("OTP Verified:", enteredOTP)
                                } else {
                                  console.log(
                                    "Please generate OTP and enter it to proceed"
                                  )
                                }
                              }}
                            >
                              Verify OTP
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}

                    {showchangepassInput && (
                      <Form className="">
                        <Label className="form-label text-black mt-3">
                          Enter New Password
                        </Label>
                        <Input
                          name="newpassword"
                          className="form-control"
                          placeholder="enter your new password"
                          type="password"
                        />
                        <Label className="form-label text-black mt-3">
                          Confirm Password
                        </Label>
                        <Input
                          name="confirmpassword"
                          className="form-control"
                          placeholder="confirm password"
                          type="password"
                        />
                        <Row className="mt-3 mb-3">
                          <Col className="text-center">
                            <button
                              className="btn btn-light w-md text-black"
                              type="button"
                              onClick={updatePassword}
                            >
                              Update Password
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    )}
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center text-secondary">
                <p>
                  Go back to{" "}
                  <Link
                    to="/login"
                    className="font-weight-medium text-black fw-bold"
                  >
                    Login
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Dosso21. Developed with
                  <i className="mdi mdi-heart text-danger" /> by Yuvmedia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ForgetPasswordPage)
