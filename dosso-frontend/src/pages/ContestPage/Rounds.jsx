import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import axiosRetry from "axios-retry"
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Progress,
  Nav,
  NavItem,
  NavLink,
  Button,
  TabContent,
  TabPane,
  Table,
} from "reactstrap"

let wheelImg = "Assets/images/fortune-wheel.png"

const Rounds = props => {
  const location = useLocation()
  const data = location.state
  document.title = "Join Contest"
  const [activeTab, setActiveTab] = useState("1")
  const [winzonedata, setWinzoneData] = useState([])
  const [loading, setLoading] = useState(true)
  const [rankingdata, setrankingdata] = useState([])
  // Create a new instance of axios
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "http://127.0.0.1:8000/api/viewwinzone",
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log("Final Data : ", response.data)
      setWinzoneData(response.data)
    } catch (error) {
      console.log("error-&gt;", error)
    } finally {
      setLoading(false)
    }
  }
  const RankingList = async () => {
    try {
      const response = await axiosInstance.get(
        "http://127.0.0.1:8000/api/getpoints/" + data.id,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log("Final Data : ", response.data)
      setrankingdata(response.data)
    } catch (error) {
      console.log("error-&gt;", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    RankingList()
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading......</div>
  }
  return (
    <div>
      <div className="page-content">
        <Container fluid className="">
          <Row className="flex-column align-items-center justify-content-center">
            <Col lg={3} className="px-0">
              <Card className="border shadow-lg rounded-2 border-3 ">
                <CardHeader className=" border-bottom text-center fs-5 fw-bold">
                  {data.title}
                </CardHeader>
                <CardBody>
                  <CardTitle className="mt-0 ">
                    <div>
                      <div>Prize Pool</div>
                      <div className="text-black fs-3">₹ {data.totalprice}</div>
                      <div className="">
                        <Progress
                          animated
                          className="mb-1"
                          color="secondary"
                          max={Number(data.joinmembers)}
                          value={Number(data.play_contests_count)}
                          style={{
                            height: "15px",
                          }}
                        ></Progress>
                        <div className="float-start text-danger progress-text fw-bold">
                          {Number(data.joinmembers) -
                            Number(data.play_contests_count)}{" "}
                          Spots left
                        </div>
                        <div className="float-end text-muted progress-text">
                          {Number(data.joinmembers)} Spots
                        </div>
                      </div>
                    </div>
                  </CardTitle>
                  {/* <CardText className=" text-center">
                                        Top 25 will qualify for next round
                                    </CardText> */}
                  <Link
                    to="/spingame"
                    className="btn btn-light w-100 fs-4 rounded-3 mt-3"
                  >
                    Join ₹ {data.registrationfees}
                  </Link>
                </CardBody>
                <CardFooter className=" border-top text-center">
                  End Time: <span className="text-danger">5 Hours</span> left
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="my-2 justify-content-center">
            <Col
              lg="3"
              className="d-grid align-content-center shadow-lg rounded  p-3"
            >
              <div>
                <Nav justified tabs>
                  <NavItem>
                    <NavLink
                      className={
                        activeTab === "1"
                          ? "active fw-bold text-uppercase text-black"
                          : "fw-bold text-uppercase text-secondary"
                      }
                      onClick={() => toggleTab("1")}
                    >
                      Winner
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={
                        activeTab === "2"
                          ? "active fw-bold text-uppercase text-black"
                          : "fw-bold text-uppercase text-secondary"
                      }
                      onClick={() => toggleTab("2")}
                    >
                      Leaderboard
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  {/* winner prize */}
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <div className="winningtable">
                          <Table hover responsive size="">
                            <thead>
                              <tr>
                                <th>Rank</th>
                                <th className="text-end">WINNINGS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {(winzonedata || []).map((item, key) => (
                                <tr key={item.id}>
                                  <th scope="row" className="fs-6">
                                    {item.start == 1
                                      ? "🥇"
                                      : item.start == 2
                                      ? "🥈"
                                      : item.start == 3
                                      ? "🥉"
                                      : item.start + "-" + item.end}
                                  </th>
                                  <td>
                                    {item.price == 0
                                      ? "Gift Voucher"
                                      : "₹ " + item.price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>

                  {/* Leader Board */}
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <div className="winningtable">
                          <Container fluid className="">
                            <Row>
                              <div className="d-flex justify-content-between align-content-center my-2">
                                <div className="fs-5 fw-bold my-1 text-center">
                                  Top 5 Ranking
                                </div>
                                <Link to="/leaderbaord" className="">
                                  <Button className="btn btn-soft-secondary waves-effect waves-light btn-danger fw-bold ">
                                    View All
                                  </Button>
                                </Link>
                              </div>
                              {(rankingdata.slice(0, 3) || []).map(
                                (item, index) => (
                                  <Card
                                    className=" bg-white shadow-sm mb-2 rounded-3"
                                    key={item.id}
                                  >
                                    <CardBody className="d-flex p-2 justify-content-between align-items-center">
                                      <div className="d-flex align-items-center ">
                                        <div className="me-2 fs-3 border-end">
                                          {index == 0
                                            ? "🥇"
                                            : index == 1
                                            ? "🥈"
                                            : index == 2
                                            ? "🥉"
                                            : index}
                                        </div>
                                        <div className="me-2 border border-1 border-secondary rounded-3">
                                          <img
                                            src={
                                              item.studentprofile == null
                                                ? wheelImg
                                                : item.studentprofile
                                            }
                                            alt=""
                                            className="img-fluid "
                                            width={35}
                                          />
                                        </div>
                                        <div className="me-2 fw-bold fs-5">
                                          {item.studentname}{" "}
                                        </div>
                                      </div>
                                      <div className="fw-bold fs-5">
                                        {" "}
                                        {item.point} pts
                                      </div>
                                    </CardBody>
                                  </Card>
                                )
                              )}
                            </Row>
                          </Container>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Rounds
