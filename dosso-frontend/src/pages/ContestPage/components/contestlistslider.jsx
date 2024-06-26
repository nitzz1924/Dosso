import React, { useEffect, useState } from "react"
import axios from "axios"
import Flicking from "@egjs/react-flicking"
import "@egjs/flicking-plugins/dist/flicking-plugins.css"
import axiosRetry from "axios-retry"
import config from "constants/config"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Progress,
  Spinner,
} from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import Countdown from "react-countdown"

const Contestlistslider = ({ title }) => {
  const navigate = useNavigate()
  const [contestData, setContestData] = useState([])
  const [member, setMember] = useState(0)
  const [loading, setLoading] = useState(true)
  // Create a new instance of axios
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })

  const handleClick = contest => {
    navigate("/rounds", { state: contest })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          config.apiUrl + "showcontests",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        console.log("Final Data : ", response.data)
        setContestData(response.data)
      } catch (error) {
        console.log("error", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>
      <div className="card" aria-hidden="true">
        
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a href="#" className="btn btn-secondary disabled placeholder col-6"></a>
        </div>
      </div>
      <div className="card" aria-hidden="true">
        
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a href="#" className="btn btn-secondary disabled placeholder col-6"></a>
        </div>
      </div>
      <div className="card" aria-hidden="true">
        
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a href="#" className="btn btn-secondary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
  }

  return (
    <div className="">
      <Row className="my-2">
        <Col className="d-grid align-content-center">
          <div className="d-flex justify-content-between align-content-center">
            <div className="fs-3 fw-bold text-black text-uppercase">
              {title}
            </div>
            <Link to="/history" className="">
              <button className="btn btn-soft-dark waves-effect waves-light fw-bold ">
                My Contest
              </button>
            </Link>
          </div>
        </Col>
      </Row>

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
                    <Countdown date={item.enddate} />
                  </div>

                  <div className="mb-0">
                    <span className="badge text-bg-success fs-6">
                      {item.status === "2" ? "Active" : ""}
                    </span>
                  </div>
                </CardHeader>
                <CardBody className="p-3">
                  <div className="text-start">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="fw-bolder fs-3 text-black">
                        {item.title}
                      </div>

                      <div>
                        Entry Fees
                        <div className="badge text-bg-info d-grid justify-content-center">
                          <span className="text-center round-text text-white">
                            ₹ {item.registrationfees}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-3 pt-2">
                      <Progress
                        animated
                        className="mb-1"
                        color="secondary"
                        max={Number(item.joinmembers)}
                        value={Number(item.play_contests_count)}
                        style={{ height: "5px" }}
                      ></Progress>
                      <div className="float-start text-danger progress-text fw-bold">
                        {Number(item.joinmembers) -
                          Number(item.play_contests_count)}
                        <span className="ms-1">Seats left</span>
                      </div>
                      <div className="float-end text-muted progress-text">
                        {Number(item.joinmembers)} Seats
                      </div>
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={() => handleClick(item)}
                        className={
                          "btn" +
                          (item.status === "2"
                            ? " btn-outline-dark "
                            : " btn-light ") +
                          "shadow-sm w-100 fw-bold fs-5 text-uppercase rounded-5"
                        }
                        // disabled={item.status === "2" ? false : true}
                      >
                        {/* {item.status === "2" ? "Participate" : "Coming Soon!"} */}
                        {item.status === "2" ? "Participate" : item.status === "3" ? "Closed!" : "Coming Soon!"}
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
      <p className="text-center text-muted">The End</p>
    </div>
  )
}

export default Contestlistslider
