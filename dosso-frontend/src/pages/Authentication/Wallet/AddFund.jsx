import React, { useState, useEffect } from "react"
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
} from "reactstrap"
import { Link, useNavigate, useLocation } from "react-router-dom"
// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"
import { getElement } from "@egjs/react-flicking"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import MockAdapter from "axios-mock-adapter"
import { getLocalData } from "services/global-storage"
// import CryptoJS from 'crypto-js';

const AddFund = () => {
  document.title = "Add Fund"
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
  const [walletdata, setWalletData] = useState([])
  const [balanceAmount, setbalanceAmount] = useState(wallet)
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
        .min(500, "Minimum amount is ₹500")
        .max(10000, "Maximum amount is ₹10,000")
        .test(
          "is-multiple-of-100",
          "Amount must be in multiples of ₹100",
          value => value % 100 === 0
        ),
    }),
    onSubmit: values => {
      console.log("Form submitted with values:", values)
      try {
        const dataList = []
        dataList.push({
          userid: getLocalData("userId"),
          transactionid: 15,
          amount: validation.values.initialAmount,
          transactiontype: "PhonePe",
          paymenttype: "Credit",
          status: 0,
        })
        console.log(dataList)
        // Mock the HTTP request
        mockAdapter
          .onPost(config.apiUrl + "insertwallet")
          .reply(200, { success: true })
        axios
          .post(config.apiUrl + "insertwallet", dataList[0], {})
          .then(response => {
            console.log(JSON.stringify(response.data))
            swal("Great!", "Amount Added Successfully!", "success").then(() => {
              navigate(-1) // Redirect to '/other-page'
            })
          })
          .catch(error => {
            // Handle errors here
            console.log("error->", error)
          })
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
  async function handlePhonePePayment() {
    const amount = 1000 // Replace with actual amount
    const redirectUrl = "http://localhost:3000/addfund/success" // Replace with your redirect URL
    const dataList = []
    dataList.push({
      initialAmount: 100,
      redirectUrl: "http://localhost:3000/addfund/success",
    })
    axios
      .post(config.apiUrl + "phonepe-payment", dataList[0], {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        console.log(JSON.stringify(response.data))
        swal("Great!", "Payment Successfully!", "success").then(() => {
        })
      })
      .catch(error => {
        // Handle errors here
        console.log("error->", error)
      })
  }
  // async function handlePhonePePayment() {
  //   try {
  //     const payload = {
  //       amount: 10000,
  //       redirectUrl: "https://webhook.site/redirect-url",
  //       redirectMode: "REDIRECT",
  //       merchantId: "M228QYEMQERGS",
  //       merchantTransactionId: "MT7850590068188104",
  //       callbackUrl: "https://webhook.site/callback-url",
  //       mobileNumber: "9999999999",
  //       paymentInstrument: {
  //         type: "PAY_PAGE"
  //       }
  //     };
  //     const payloadString = JSON.stringify(payload);
  //     const salt = 'b7dbb332-a97f-4dfc-b6eb-64d397216248'; // Replace with your actual salt key
  //     const hash = CryptoJS.SHA256(payloadString + salt + '/pg/v1/pay' + 'b7dbb332-a97f-4dfc-b6eb-64d397216248').toString();
  //     const xVerifyHeader = hash + '###1'; // Assuming '1' is the version
  
  //     const response = await axios.post(
  //       "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
  //       jsonToBase64(payload),
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-VERIFY": xVerifyHeader,
  //         }
  //       }
  //     );
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
   
  // }
  function jsonToBase64(jsonData) {
    const jsonString = JSON.stringify(jsonData); // Convert JSON object to string
    const base64String = btoa(jsonString); // Encode string to Base64
    return base64String;
  }
  if (loading) {
    return <div>Loading......</div>
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
                    <h3 className=" fw-bold"> Recharge Your Wallet</h3>
                    <p className="text-muted mb-2">
                      Current Wallet Amount:{" "}
                      <span className="text-success fw-bold">
                        ₹{wallet}
                      </span>
                    </p>
                  </div>
                  <Link to="/myWallet" className="">
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
                              placeholder="Enter Amount"
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

                          <div className="text-center mt-4 ">
                            <Button
                              type="submit"
                              color="dark"
                              className="fw-bold"
                            >
                              Continue Payment
                            </Button>
                          </div>
                        </Form>
                        <Button
                          type="submit"
                          color="dark"
                          className="fw-bold"
                          onClick={handlePhonePePayment}
                        >
                          Make Payment
                        </Button>
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

export default AddFund
