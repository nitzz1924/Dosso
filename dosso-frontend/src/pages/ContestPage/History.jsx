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
} from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import { getLocalData } from "services/global-storage"
import MockAdapter from "axios-mock-adapter"
import swal from "sweetalert"
import { toUpper } from "lodash"

const History = () => {
  const [loading, setLoading] = useState(true)
  const [contestData, setContestData] = useState([])
  const [disabledContests, setDisabledContests] = useState(false)
  const navigate = useNavigate()
  const axiosInstance = axios.create()
  const mockAdapter = new MockAdapter(axiosInstance)
  axiosRetry(axiosInstance, { retries: 3 })
  document.title = "Contests"

  const mycontests = async () => {
    try {
      const response = await axios.get(
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

  const handleClick = contest => {
    console.log(contest)
    if (contest.playconteststatus === "1") {
      navigate("/spingame", { state: contest })
    } else if (contest.playconteststatus === "2") {
      console.log(contest)
      requestPayment(contest)
    }
  }

  const requestPayment = item => {
    try {
      console.log("requestPayment : ", item)
      const dataList = []
      dataList.push({
        playerId: getLocalData("userId"),
        contestid: item.id,
        amount: item.contestwinprice,
        rank: item.contestrank,
        playcontestid: item.playcontestid,
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
          swal("Great!", "Payment Request Sent", "success").then(() => {
            setContestData([])
            mycontests()
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
                <Button className="btn btn-soft-dark waves-effect waves-light btn-danger fw-bold ">
                  Back
                </Button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="my-2 justify-content-center">
          <Col lg="3" className="d-grid align-content-center p-0">
            <Flicking
              align="prev"
              horizontal={false}
              circular={false}
              className="flicking-wrapper"
              resizeOnContentsReady={true}
              renderOnlyVisible={true}
            >
              {(contestData || []).map((item, key) => (
                <div className="flicking-viewport vertical shadow-lg" key={key}>
                  <div className="flicking-camera ">
                    <Card className="mb-3 flicking-panel  rounded-3">
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
                        <div className="d-flex justify-content-between flex-column ">
                          <div className="fw-bolder fs-3 text-black text-center">
                            {item.title}
                          </div>
                          <div className="mb-0 text-muted text-center">
                            🏆 Prize pool:{" "}
                            <span className="text-dark fw-bold">
                              ₹{item.totalprice}
                            </span>
                          </div>
                          <div className=" w-100 p-2 d-flex justify-content-center ">
                            <div className="mb-0 me-1">
                              Your Rank:
                              <div className="text-warning fs-3 fw-bold ms-1 bg-dark text-center rounded">
                                # {item.contestrank}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardBody>

                      <CardFooter className="d-flex justify-content-around">
                        <button
                          onClick={() => handleClick(item)}
                          disabled={item.playcontestid==item.prid ? true : false}
                          className={
                            "btn" +
                            (item.playconteststatus === "1"
                              ? " btn-outline-dark "
                              : item.playconteststatus === "2"
                              ? " btn-outline-primary "
                              : " btn-outline-light ") +
                            "shadow-sm fw-bold fs-5 text-uppercase rounded-3"
                          }
                        >
                          {item.playconteststatus === "1"
                            ? "Play Now"
                            : item.playconteststatus === "2"
                            ? "Payment Request"
                            : "Yet to start!"}
                        </button>
                        {item.playconteststatus === "2" && (
                          <button
                            onClick={() =>
                              navigate("/rewards", { state: item })
                            }
                            className="btn btn-outline-success waves-effect waves-light fw-bold shadow fs-5 text-uppercase rounded-3"
                          >
                            Reward
                          </button>
                        )}
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
