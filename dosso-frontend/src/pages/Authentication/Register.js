import React, { useEffect, useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
import OTPInput from 'react-otp-input';
import axios from "axios";
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import config from "constants/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, apiError } from "../../store/actions";
import { Link } from "react-router-dom";

let logoImg = "../../../Assets/images/Dosso21-logo-new.webp";

const Register = props => {
  document.title = "Registration";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
      referral: '0001ADMIN',
      mobilenumber: '',
    },
    validate: (values) => {
      const errors = {};

      // Email validation
      if (!values.email) {
        errors.email = 'Please Enter Valid Email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      // Password validation
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 5) {
        errors.password = 'Password must be at least 5 characters long';
      }

      // Mobile number validation (assuming it should be exactly 10 digits)
      if (!values.mobilenumber) {
        errors.mobilenumber = 'Please Enter 10 Digit Number';
      } else if (!/^\d{10}$/i.test(values.mobilenumber)) {
        errors.mobilenumber = 'Mobile number must be 10 digits';
      }

      return errors;
    },
  });

  const { isValid } = validation;

  const checkDuplicate = async () => {
    try {
      const response = await axios.post(config.apiUrl + 'checkDuplicate', {
        emailaddress: validation.values.email,
        contactnumber: validation.values.mobilenumber,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      Swal.fire("Oops!", "An unexpected error occurred. Please try again later.", "error");
      return null;
    }
  };

  const generateOTP = async (event) => {
    event.preventDefault();

    if (isValid) {
      const duplicateCheck = await checkDuplicate();
      if (duplicateCheck) {
        if (duplicateCheck.emailExists) {
          Swal.fire("Duplicate Email", "This email is already registered. Please use a different email.", "error");
          return;
        }
        if (duplicateCheck.contactnumberExists) {
          Swal.fire("Duplicate Mobile Number", "This mobile number is already registered. Please use a different mobile number.", "error");
          return;
        }

        const digits = '0123456789';
        let randomOTP = '';
        for (let i = 0; i < 6; i++) {
          randomOTP += digits[Math.floor(Math.random() * 10)];
        }
        setGeneratedOTP(randomOTP);
        setShowOTPInput(true);
      } else {
        Swal.fire("Oops!", "An unexpected error occurred during duplicate check. Please try again later.", "error");
      }
    } else {
      console.log('Please correct the form errors before generating OTP');
    }
  };

  const handleChange = otp => {
    setEnteredOTP(otp);
  };

  const verifyOTP = () => {
    if (enteredOTP === generatedOTP) {
      localStorage.setItem('userData', JSON.stringify(validation.values));
      try {
        const dataList = [{
          username: validation.values.mobilenumber,
          emailaddress: validation.values.email,
          password: validation.values.password,
          contactnumber: validation.values.mobilenumber,
          referbyId: validation.values.referral,
          status: 1,
        }];
        axios.post(config.apiUrl + 'studentregister', dataList[0], {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then((response) => {
          Swal.fire("Great!", "Your Account created!", "success")
          .then(() => {
            navigate('/login');
          });
        })
        .catch((error) => {
          Swal.fire("Oops!", "Something went wrong with the registration. Please try again.", "error");
        });

      } catch (error) {
        Swal.fire("Oops!", "An unexpected error occurred. Please try again later.", "error");
      }
      dispatch(registerUser(validation.values));
    } else {
      Swal.fire("Incorrect OTP", "The OTP you entered is incorrect. Please try again.", "error");
    }
  };

  const { user, registrationError } = useSelector(state => ({
    user: state.Account.user,
    registrationError: state.Account.registrationError,
  }));

  useEffect(() => {
    dispatch(apiError(""));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="home-btn d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages d-grid align-items-center py-5" style={{ backgroundColor: "rgb(236, 236, 236)" }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden mt-3">
                <div className="border-bottom" >
                  <Row>
                    <Col className="col-7">
                      <div className="text-secondary p-4">
                        <h5 className="text-black">Free Registration</h5>
                        <p>Get your free Dosso21 account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 text-center align-self-end">
                      <img src={logoImg} alt="" className="" height="110" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="text-black" >
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={generateOTP} // Submit the form to the generateOTP function
                    >
                      {user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {registrationError ? (
                        <Alert color="danger">{registrationError}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <Label className="form-label  ">Mobile Number <sup className="text-danger fw-light fs-6">*</sup></Label>
                        <Input
                          name="mobilenumber"
                          type="tel"
                          maxLength={10}
                          pattern="[0-9]*"
                          inputMode="numeric"
                          placeholder="Enter Mobile Number"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.mobilenumber}
                          invalid={validation.touched.mobilenumber && validation.errors.mobilenumber}
                        />
                        <FormFeedback type="invalid">{validation.errors.mobilenumber}</FormFeedback>
                      </div>
                      <div className="mb-3">
                        <Label className="form-label  ">Email <sup className="text-danger fw-light fs-6">*</sup></Label>
                        <Input
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email}
                          invalid={validation.touched.email && validation.errors.email}
                        />
                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                      </div>
                      <div className="mb-3">
                        <Label className="form-label  ">Password <sup className="text-danger fw-light fs-6">*</sup></Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password}
                          invalid={validation.touched.password && validation.errors.password}
                        />
                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                      </div>
                      <div className="mb-3">
                        <Label className="form-label  ">Referral Code <sup className="text-muted">(optional)</sup></Label>
                        <Input
                          name="referralcode"
                          type="text"
                          placeholder="Enter referral code"
                        />
                      </div>
                      <div className="mt-4 text-center ">
                        <button
                          type="button"
                          className="btn btn-secondary px-5 text-white fw-bold btn-block"
                          onClick={generateOTP}
                          disabled={!validation.touched.mobilenumber}
                        >
                          Get OTP
                        </button>
                      </div>
                    </Form>

                    <Form>
                      {isValid && showOTPInput && ( // Conditionally render OTP input section
                        <div id="otpinput" className="mt-4 text-center d-grid justify-content-center ">
                          Enter OTP: {generatedOTP}
                          <OTPInput
                            value={enteredOTP}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span style={{ width: "8px" }}>-</span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            renderInput={(props) => <input {...props} />}
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
                              // onClick={verifyOTP}
                              onClick={() => {
                                if (isValid && showOTPInput) { // Check if form is valid and OTP input is shown
                                  verifyOTP(); // Call verifyOTP function on button click
                                } else {
                                  console.log('Please generate OTP and enter it to proceed');
                                }
                              }}
                            >
                              Register Now
                            </button>
                          </div>
                        </div>
                      )}
                    </Form>
                    <div className="mt-4 text-center text-secondary ">
                      <p className="mb-0">
                        By registering you agree to the Dosso21 
                        <Link to="#" className="text-secondary">
                          Terms of Use
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center text-black">
                <p>
                  Already have an account ?
                  <Link to="/login" className="font-weight-medium text-secondary">
                    Login
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Dosso21. Crafted with
                  <i className="mdi mdi-heart text-danger" /> by Yuvmedia.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
