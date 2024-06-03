import React, { useState, useEffect, useCallback } from "react"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Form,
  Label,
  Input,
  FormFeedback,
  Button,
  FormText,
  Spinner,
} from "reactstrap"
import { Link, useNavigate, useLocation } from "react-router-dom"
// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import MockAdapter from "axios-mock-adapter"
import { getLocalData } from "services/global-storage"
import useRazorpay from "react-razorpay"

// import CryptoJS from 'crypto-js';
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script")
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}
const Withdraw = () => {
  document.title = "Withdraw"
  const navigate = useNavigate()
  const location = useLocation()
  const wallet = location.state
  // Create a new instance of axios
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })
  // Create a new instance of the mock adapter
  const mockAdapter = new MockAdapter(axiosInstance)
  const [initialAmount, setInitialAmount] = useState("500")
  const [loading, setLoading] = useState(true)
  const [Razorpay] = useRazorpay()
  const [idx, setidx] = useState(1)
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      initialAmount: initialAmount || "",
      idx: idx || "",
    },
    validationSchema: Yup.object({
      initialAmount: Yup.number()
        .required("Please enter an amount")
        .positive("Please enter a positive amount")
        .integer("Amount must be a whole number")
        .min(500, "Minimum amount is ₹150")
        .test(
          "is-multiple-of-100",
          "Amount must be in multiples of ₹100",
          value => value % 100 === 0
        ),
    }),
    onSubmit: values => {
      console.log(
        "Form submitted with values:",
        validation.values.initialAmount
      )
      try {
        if (wallet >= validation.values.initialAmount) {
          setTimeout(async () => {
            try {
              console.log("requestPayment : ", item)
              const dataList = []
              dataList.push({
                playerId: getLocalData("userId"),
                contestid: getLocalData("userId"),
                amount: validation.values.initialAmount,
                rank: 0,
                playcontestid: 0,
              })
              // Mock the HTTP request
              mockAdapter
                .onPost(config.apiUrl + "paymentRequest", dataList[0])
                .reply(200, { success: true })
              axios
                .post(config.apiUrl + "paymentRequest", dataList[0], {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then(response => {
                  console.log(JSON.stringify(response.data))
                  Swal.fire("Great!", "Payment Request Sent", "success").then(
                    () => {
                      navigate("/myFund")
                    }
                  )
                })
                .catch(error => {
                  // Handle errors here
                  console.log("error", error)
                })
            } catch (error) {
              console.error(error)
            }
            setSubmitting(false) // Set submitting to false after payment handling
          }, 1000)
        } else {
        }
      } catch (error) {
        console.error(error)
      }
    },
  })
  // Function to allow only numeric input
  const handleNumericInput = e => {
    const value = e.target.value.replace(/\D/, "")
    validation.setFieldValue("initialAmount", value)
  }

  const insertAmount = amount => {
    validation.setFieldValue("initialAmount", amount)
  }
  useEffect(() => {
    setLoading(false)
  }, [])
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
    <>
      <div className="page-content">
        <Container fluid>
          <Row className="my-2 justify-content-center">
            <Col lg="3" className="d-grid align-content-center">
              <Card>
                <CardHeader className="d-flex justify-content-between ">
                  <div>
                    <h3 className=" fw-bold"> Withdraw Wining Price</h3>
                    <p className="text-muted mb-2">
                      Current Wining Amount:
                      <span className="text-info fw-bold ms-1 fs-5">
                        ₹ {wallet}
                      </span>
                    </p>
                  </div>
                  <Link to="/myFund" className="">
                    <Button className="btn btn-soft-secondary waves-effect waves-light btn-danger fw-bold ">
                      Back
                    </Button>
                  </Link>
                </CardHeader>
                <CardBody className="border-top">
                  <Row>
                    <Col className="d-grid align-items-center ">
                      <div>
                        <Form
                          className="form-horizontal"
                          onSubmit={e => {
                            e.preventDefault()
                            validation.handleSubmit()
                          }}
                        >
                          <div className="form-group">
                            <Label className="form-label fw-bold">
                              Enter Amount in Multiple of 100 below
                            </Label>
                            <Input
                              name="initialAmount"
                              className="form-control border fw-bold fs-3 text-success "
                              placeholder="Enter Withdraw Amount"
                              type="text"
                              id="fundInput"
                              onChange={e => {
                                validation.handleChange(e)
                                handleNumericInput(e)
                              }}
                              onBlur={validation.handleBlur}
                              value={`${validation.values.initialAmount || ""}`}
                              invalid={
                                validation.touched.initialAmount &&
                                !!validation.errors.initialAmount
                              }
                            />
                            <FormText>
                              Min value: ₹500 & Max value: ₹10,000
                            </FormText>
                            {validation.touched.initialAmount &&
                            validation.errors.initialAmount ? (
                              <FormFeedback type="invalid">
                                {validation.errors.initialAmount}
                              </FormFeedback>
                            ) : null}
                            <Input name="idx" value={idx} type="hidden" />
                          </div>
                          <div className="mt-2 fw-bold">
                            or Select From Below
                            <div className="d-flex justify-content-between mt-1 accordion ">
                              <Button
                                outline
                                size="sm"
                                color="dark"
                                onClick={() => insertAmount(500)}
                                className="rounded-pill fs-6 "
                              >
                                ₹500
                              </Button>
                              <Button
                                outline
                                size="sm"
                                color="dark"
                                onClick={() => insertAmount(1000)}
                                className="rounded-pill fs-6 "
                              >
                                ₹1000
                              </Button>
                              <Button
                                outline
                                size="sm"
                                color="dark"
                                onClick={() => insertAmount(2500)}
                                className="rounded-pill fs-6 "
                              >
                                ₹2500
                              </Button>
                              <Button
                                outline
                                size="sm"
                                color="dark"
                                onClick={() => insertAmount(5000)}
                                className="rounded-pill fs-6 "
                              >
                                ₹5000
                              </Button>
                              <Button
                                outline
                                size="sm"
                                color="dark"
                                onClick={() => insertAmount(10000)}
                                className="rounded-pill fs-6 "
                              >
                                ₹10000
                              </Button>
                            </div>
                          </div>
                          <span style={{ color: "red" }}>
                            {wallet >= 150
                              ? "Unable to Process Withdrawal"
                              : ""}
                          </span>
                          <div className="text-center mt-4 ">
                            <Button
                              type="submit"
                              color="dark"
                              className="fw-bold"
                              disabled={wallet == 0 ? true : false}
                            >
                              Withdraw Request
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Withdraw
