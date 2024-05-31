import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";
import config from "constants/config";
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
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import * as Yup from "yup";
import { useFormik } from "formik";
import { userForgetPassword } from "../../store/actions";
let logo = "../../Assets/images/Dosso21-logo-new.webp"
const ForgetPasswordPage = (props) => {
  const navigate = useNavigate();
  document.title = "Forget Password";
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    },
  });

  const { forgetError, forgetSuccessMsg } = useSelector((state) => ({
    forgetError: state.ForgetPassword.forgetError,
    forgetSuccessMsg: state.ForgetPassword.forgetSuccessMsg,
  }));

  // const handleInputChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Phone number submitted:", phoneNumber);
  //   setLoading(true);

  //   const dataList = {
  //     phonenumber: phoneNumber,
  //   };
  //   console.log("Data List:", dataList);
  //   axios
  //     .post(config.apiUrl + "
      
  //     ", dataList)
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       navigate(-1);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //       setLoading(false); // Stop loading in case of error
  //     });
  // };

  if (loading) {
    return <div>Loading...</div>;
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

                    <Form className="form-horizontal">
                      <div className="mb-3">
                        <Label className="form-label text-black">
                          Enter Phone Number
                        </Label>
                        <Input
                          name="phonenumber"
                          className="form-control"
                          placeholder="enter your phone number"
                          type="text"
                          // value={phoneNumber}
                          // onChange={handleInputChange}
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
                            type="submit"
                          >
                            Update Password
                          </button>
                        </Col>
                      </Row>
                    </Form>
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
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
