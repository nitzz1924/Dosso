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
import Swal from "sweetalert2"

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
  const [initialAmount, setInitialAmount] = useState("10")
  const [loading, setLoading] = useState(true)
  const [walletdata, setWalletData] = useState([])
  const [Razorpay] = useRazorpay()
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
        .min(10, "Minimum amount is ₹10")
        .max(10000, "Maximum amount is ₹10,000")
        .test(
          "is-multiple-of-100",
          "Amount must be in multiples of ₹100",
          value => value % 10 === 0
        ),
    }),
    onSubmit: values => {
      console.log(
        "Form submitted with values:",
        validation.values.initialAmount
      )
      try {
        const dataList = []
        dataList.push({
          userid: getLocalData("userId"),
          amount: validation.values.initialAmount,
        })
        console.log("pAY DTAA", dataList[0])
        setTimeout(async () => {
          await handlePayment(dataList[0]);
          setSubmitting(false); // Set submitting to false after payment handling
        }, 1000);
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
  const createOrder = async (item) => {
    try {
      console.log("Create Order Data : ", item);
      const authuser = JSON.parse(getLocalData("authUser"));
      console.log(authuser.studentname);
      const dataList = [{
        playerId: getLocalData("userId"),
        amount: Number(item.amount),
        name: authuser.studentname,
        mobileno: authuser.contactnumber,
      }];
      console.log("order : ", dataList);
      mockAdapter
        .onPost(config.apiUrl + "createOrder", dataList[0])
        .reply(200, { success: true });
      const response = await axios.post(config.apiUrl + "createOrder", dataList[0], {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(JSON.stringify(response.data));
      return response.data; // Return the data from the Axios response
    } catch (error) {
      console.error(error);
      throw error; // Throw error to be caught by the caller
    }
  };
  
  const handlePayment = async (item) => {
    try {
      const order = await createOrder(item); // Wait for createOrder to resolve
      console.log("Amount data : ", order);
    
      // Your remaining handlePayment logic here...
      const authuser = JSON.parse(getLocalData("authUser"));
      console.log(authuser.studentname);
      const orderamt = Number(order.amount) * 100;
      const options = {
        key: config.key,
        amount: orderamt,
        currency: "INR",
        name: authuser.studentname,
        description: "Wallet Recharge",
        image: "https://admin.dosso21.com/assets/images/dossologofinal.png",
        order_id: order.id,
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          navigate("/verify", { state: {data:response,amount:orderamt}})
        },
        prefill: {
          name: authuser.studentname,
          email: authuser.emailaddress,
          contact: authuser.contactnumber,
        },
        theme: {
          color: "#28282B",
        },
      };
  
      const rzp1 = new Razorpay(options);
  
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
        // Redirect to failure page
        navigate("/payment-failure");
      });
  
      rzp1.open();
    } catch (error) {
      console.error('Error handling payment:', error);
      // Handle error or redirect to a failure page
      navigate("/payment-failure");
    }
  };
  
  useEffect(() => {
    setLoading(false)
  }, [])

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
                      Current Wallet Amount:
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
                              Enter Amount in Multiple of 10 below
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
                              Min value: ₹10 & Max value: ₹10,000
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
                                onClick={() => insertAmount(100)}
                                className="rounded-pill fs-6 "
                              >
                                ₹100
                              </Button>
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
