import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../store/actions";

// import images

let logo = "../../Assets/images/Dosso21-logo-new.webp";

const ForgetPasswordPage = props => {

  //meta title
  document.title = "Forget Password";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });

  const { forgetError, forgetSuccessMsg } = useSelector(state => ({
    forgetError: state.ForgetPassword.forgetError,
    forgetSuccessMsg: state.ForgetPassword.forgetSuccessMsg,
  }));

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages d-grid align-items-center" style={{height: "100vh", backgroundColor: "rgb(236, 236, 236)"}}>
        <Container>
          <Row className="justify-content-center align-items-center ">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="border-bottom" >
                  <Row>
                    <Col xs={7} >
                      <div className="text-secondary p-4">
                        <h5 className="text-black">Forgot Password?</h5>
                        <p>Enter email to recover.</p>
                      </div>
                    </Col>
                    <Col className="col-5 text-center align-self-end">
                      <img src={logo} alt="" className="" height="110" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="" >
                  {/* <div>
                    <Link to="/#">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="110"
                          />
                        </span>
                      </div>
                    </Link>
                  </div> */}
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

                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                        <Label className="form-label text-black">Enter Registred Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>
                      <Row className="mb-3">
                        <Col className="text-center">
                          <button
                            className="btn btn-light w-md text-black"
                            type="submit"
                          >
                            Send Request
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center text-secondary">
                <p>
                  Go back to 
                  <Link to="/login" className="font-weight-medium text-black fw-bold">
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
