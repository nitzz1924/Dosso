import React, { useEffect, useState } from "react"
import Flicking from "@egjs/react-flicking"
import "@egjs/flicking-plugins/dist/flicking-plugins.css"
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Container,
  CardFooter,
  CardHeader,
  Progress,
} from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import { getLocalData } from "services/global-storage"
let rewardImg = "https://cdn-icons-png.flaticon.com/128/2282/2282531.png"
let magicImg = "https://cdn-icons-png.flaticon.com/512/4338/4338712.png"
let spinsImg = "https://cdn-icons-png.flaticon.com/512/8146/8146784.png"
let offerImg = "https://cdn-icons-png.flaticon.com/512/776/776627.png"
let tackerImg = "https://cdn-icons-png.flaticon.com/512/5694/5694967.png"
let scholarshipImg = "https://cdn-icons-png.flaticon.com/512/3769/3769879.png"
import swal from "sweetalert"
const History = () => {
  const [loading, setLoading] = useState(true)
  const [contestData, setContestData] = useState([])
  const navigate = useNavigate()
  // Create a new instance of axios
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })
  document.title = "Contests"
  const handleClick = contest => {
    console.log(contest);
    if (contest.status === "1") {
      navigate("/rounds", { state: contest })
    } else if (contest.status === "2") {
      console.log(contest);
      //requestPayment(contest);
    }
  }
  const requestPayment = item => {
    try {
      const dataList = []
      dataList.push({
        playerId: item.playerId,
        contestid: item.contestid,
        amount: item.password,
        rank: item.mobilenumber,
      })
      // Mock the HTTP request
      mockAdapter
        .onPost(config.apiUrl + "paymentRequest")
        .reply(200, { success: true })
      axios
        .post(config.apiUrl + "paymentRequest", dataList[0], {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(response => {
          console.log(JSON.stringify(response.data))
          swal("Great!", "Payment Request Sent", "success").then(() => {
            navigate("/history")
          })
        })
        .catch(error => {
          // Handle errors here
          console.log("error", error)
        })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    const mycontests = async () => {
      try {
        const response = await axiosInstance.get(
          config.apiUrl + "mycontests/" + getLocalData("userId"),
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        console.log("My Contests Data : ", response.data)
        setContestData(response.data)
      } catch (error) {
        console.log("error", error)
      } finally {
        setLoading(false)
      }
    }

    mycontests()
  }, [])

  if (loading) {
    return <div>Loading......</div>
  }
  return (
    <div className="page-content">
      <Container fluid className="justify-content-center ">
        <Row className="my-2 justify-content-center">
          <Col lg="3" className="d-grid align-content-center">
            <div className="d-flex justify-content-between align-content-center">
              <div className="fs-3 fw-bold text-secondary text-uppercase">
                My Contests
              </div>
              <Link to="/contests" className="">
                <Button className="btn btn-soft-secondary waves-effect waves-light btn-danger fw-bold ">
                  Back
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="my-2 justify-content-center">
          <Col lg="3" className="d-grid align-content-center">
            <Flicking
              align="prev"
              horizontal={false}
              circular={false}
              className="flicking-wrapper"
              resizeOnContentsReady={true}
              renderOnlyVisible={true}
            >
              {(contestData || []).map((item, key) => (
                <div className="flicking-viewport vertical " key={key}>
                  <div className="flicking-camera shadow-sm">
                    <Card className="mb-3 flicking-panel shadow border border-secondary rounded-3">
                      <CardHeader className="bg-white rounded-3 border-bottom d-flex justify-content-between">
                        <div className="mb-0 text-muted">
                          <i className="bx bx-time-five text-body me-1"></i>
                          {item.enddate}
                        </div>

                        <div className="mb-0">
                          <span className="badge text-bg-danger fs-6">
                            {item.status === "2" ? "Active" : ""}
                          </span>
                        </div>
                      </CardHeader>
                      <CardBody className="p-3">
                        <div className="text-start">
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="fw-bolder fs-3 text-black">
                                {item.title}
                              </div>
                              <div className="mb-0 text-muted">
                                <i className="bx bx-trophy text-body me-1"></i>
                                Prize pool:{" "}
                                <span className="text-success fw-bold">
                                  ₹{item.totalprice}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <button
                              onClick={() => handleClick(item)}
                              className={
                                "btn" +
                                (item.status === "1"
                                  ? " btn-dark "
                                  : item.status === "2"
                                  ? " btn-primary "
                                  : " btn-light ") +
                                "shadow w-100 fw-bold fs-5 text-uppercase rounded-5"
                              }
                              disabled={item.status === "0" ? true : false}
                            >
                              {item.status === "1"
                                ? "Play Now"
                                : item.status === "2"
                                ? "Request Payment"
                                : "Yet to start!"}
                            </button>
                          </div>
                        </div>
                      </CardBody>
                      <CardFooter className="d-flex justify-content-center">
                        <div className="mb-0 text-muted">
                          <b>{item.play_contests_count}</b>
                          <span className="ms-1">Participants</span>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </Flicking>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default History
