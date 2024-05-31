import React, { useState, useEffect } from "react"
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
} from "reactstrap"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

//redux
import { useSelector, useDispatch } from "react-redux"
import withRouter from "components/Common/withRouter"

let avatar = "../../Assets/images/Dosso21-logo-new.webp"
// actions

import { editProfile, resetProfileFlag } from "store/actions"
import { Link } from "react-router-dom"
import { getLocalData } from "services/global-storage"

const UserProfile = () => {
  //meta title
  document.title = "My Profile"

  const dispatch = useDispatch()

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [user, setuser] = useState("")
  const [idx, setidx] = useState(1)

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }))

  useEffect(() => {
    if (getLocalData('authUser')) {
      const obj = JSON.parse(getLocalData('authUser'))
      console.log("data", obj);
      setname(obj.studentname)
      setemail(obj.emailaddress)
      setuser(obj.username)
      setidx(obj.id)
      setTimeout(() => {
        dispatch(resetProfileFlag())
      }, 3000)
    }
  }, [dispatch, success])

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row className="my-2 justify-content-center">
            <Col lg="3" className="d-grid align-content-center">
              {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}

              <Card>
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={avatar}
                        alt="avatar"
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
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(UserProfile)
