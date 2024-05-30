import PropTypes from "prop-types"
import React, { useEffect } from "react"
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap"
//redux
import { useSelector, useDispatch } from "react-redux"
import withRouter from "components/Common/withRouter"
// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { loginUser } from "../../store/actions"
let profile = "../../Assets/images/Dosso21-logo-new.webp"
import { getLocalData } from "services/global-storage"
import { Link, useNavigate } from "react-router-dom"
const Login = props => {
  const navigate = useNavigate()
  //meta title
  document.title = "Login"
  const dispatch = useDispatch()
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      username: "" || "",
      password: "" || "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
      .matches(/^\d{10}$/, 'Number must be a 10-digit number')
      .required("Please Enter Your Mobile Number"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: values => {
      console.log(values)
      // dispatch(loginUser(values, props.router.navigate))
      dispatch(loginUser(values, props.router.navigate))
    },
  })
  const { error } = useSelector(state => ({
    error: state.Login.error,
  }))

  const handleLogin = (success) => {
    if (success) {
      navigate("/contests")
    } else {
      Swal.fire("Invalid Credentials", "Please check your mobile number and password.", "error")
    }
  }

  useEffect(() => {
    if (getLocalData("userId")) {
      navigate("/contests")
    }
  })

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div
        className="account-pages d-grid align-items-center"
        style={{ height: "100vh", backgroundColor: "#fff" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden shadow-lg" style={{ border: 0 }}>
                <div className="border-bottom">
                  <Row>
                    <Col xs={7}>
                      <div className="text-secondary p-4">
                        <h4 className="text-black">Welcome Back !</h4>
                        <p>Sign in to continue to Dosso 21.</p>
                      </div>
                    </Col>
                    <Col className="col-5 text-center align-self-end">
                      <img src={profile} alt="" className="" height="110" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="text-black">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Enter Unique ID</Label>
                        <Input
                          name="username" 
                          className="form-control border"
                          placeholder="Enter Mobile Number"
                          maxLength={10}
                          pattern="[0-9]*"
                          inputMode="numeric"
                          type="tel"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username &&
                              validation.errors.username
                              ? true
                              : false
                          }
                        />
                        {validation.touched.username &&
                          validation.errors.username ? (
                          <FormFeedback type="invalid">
                            {validation.errors.username}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          className="border form-control"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                              validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                          validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-secondary fw-3"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted text-decoration-underline">
                          <i className="mdi mdi-lock me-1 " />
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don't have an account?
                  <Link
                    to="/register"
                    className="fw-medium text-secondary ms-1 fw-bold text-black text-uppercase"
                  >
                    <span className="ms-1 text-info fw-bold text-decoration-underline ">Signup now</span>
                  </Link>
                </p>
                <p>
                  © {new Date().getFullYear()} Dosso21. Developed with
                  <i className="mdi mdi-heart text-danger ms-1" /> by Yuvmedia.
                </p>
                <Link to="/privacypolicy">
                  <p className="text-muted">Privacy Policy</p>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
