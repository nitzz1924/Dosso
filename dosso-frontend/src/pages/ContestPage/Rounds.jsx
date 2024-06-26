import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"
import Swal from "sweetalert2"
import { getLocalData } from "services/global-storage"
import MockAdapter from "axios-mock-adapter"
import Countdown from "react-countdown"
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Spinner,
} from "reactstrap"

let wheelImg = "Assets/images/fortune-wheel.png"

const Rounds = props => {
  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state
  document.title = "Participate"

  const [activeTab, setActiveTab] = useState("1")
  const [winzonedata, setWinzoneData] = useState([])
  const [loading, setLoading] = useState(true)
  const [rankingdata, setRankingData] = useState([])
  const [modal, setModal] = useState(false)
  const [wallet, setWallet] = useState(0)

  // Create a new instance of axios with retry configuration
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })

  const toggle = () => setModal(!modal)
  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const insertWallet = async () => {
    console.log("InsertAPI")
    try {
      const dataList = []
      dataList.push({
        userid: getLocalData("userId"),
        transactionid: 15,
        amount: data.registrationfees,
        transactiontype: "Wallet",
        paymenttype: "Debit",
        contestid: data.id,
        status: 0,
      })
      console.log("d-LIST ", dataList)

      // Mock the HTTP request
      const mockAdapter = new MockAdapter(axiosInstance)
      mockAdapter
        .onPost(config.apiUrl + "insertwallet")
        .reply(200, { success: true })

      axios
        .post(config.apiUrl + "insertwallet", dataList[0], {})
        .then(response => {
          console.log(JSON.stringify(response.data))
          Swal.fire({
            title: "Great!",
            text: "Course has been prebooked!",
            icon: "success",
            footer: 'Visit our website to  <a href="http://www.dosso21.com" target="_blank">select course</a>',
          }).then(() => {
            navigate("/history") // Redirect to '/history'
          });          
        })
    } catch (error) {
      console.error("Error in insertwallet:", error)
      Swal.fire(
        "Error",
        "There was an error processing your request. Please try again.",
        "error"
      )
    }
  }

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(config.apiUrl + "viewwinzone", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("Final Data : ", response.data)
      setWinzoneData(response.data)
    } catch (error) {
      console.error("Error fetching winzone data:", error)
    } finally {
      setLoading(false)
    }
  }

  const RankingList = async () => {
    try {
      const response = await axiosInstance.get(
        config.apiUrl + "getpoints/" + data.id
      )
      console.log("Ranking Data : ", response.data)
      setRankingData(response.data)
    } catch (error) {
      console.error("Error fetching ranking data:", error)
    } finally {
      setLoading(false)
    }
  }

  const getWalletData = async () => {
    // alert("ID",getLocalData("userId"));
    try {
      const response = await axiosInstance.get(
      config.apiUrl + "walletamount/" + getLocalData("userId"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("Wallet Data : ", response.data)
      setWallet(response.data.walletamount)
    } catch (error) {
      console.error("Error fetching wallet data:", error)
    } finally {
      setLoading(false)
    }
  }
  function handlejoin() {
    setModal(true)
  }
  useEffect(() => {
    RankingList()
    fetchData()
    getWalletData()
  }, [])

  if (loading) {
    return <div className="page-content">
      <div className="card mt-5" aria-hidden="true">
        <img src="..." className="card-img-top" alt="" />
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
                      <div className=" text-center">Prize Pool</div>
                      <div className="text-success fs-3 text-center">₹ {data.totalprice}</div>
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
                            Number(data.play_contests_count)}
                          <span className="ms-1">Seats left</span>
                        </div>
                        <div className="float-end text-muted progress-text">
                          {Number(data.joinmembers)} Total Seats
                        </div>
                      </div>
                    </div>
                  </CardTitle>

                  {data.joinmembers - data.play_contests_count != 0 ?
                    <Button
                      onClick={handlejoin}
                      className="btn btn-light w-100 fs-4 rounded-3 mt-3"
                    >
                      Join ₹ {data.registrationfees}
                    </Button>
                    :
                    <Button
                      disabled
                      className="btn btn-light border-dark w-100 fs-5 rounded-3 mt-3"
                    >
                      All seats are full
                    </Button>

                  }

                </CardBody>
                <CardFooter className=" border-top text-center">
                  End Time:
                  <span className="text-danger mx-1">
                    <Countdown date={data.enddate} />
                  </span>
                  remaining
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="my-2 justify-content-center bg-white">
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
                                <th className="text-end">Rewards</th>
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
                                          : item.start == item.end
                                            ? item.start
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
                                  Top 3 Ranks
                                </div>
                                <Button
                                  onClick={() =>
                                    navigate("/leaderbaord", { state: data })
                                  }
                                  className="btn btn-soft-dark waves-effect waves-light btn-danger fw-bold "
                                >
                                  View All
                                </Button>
                              </div>
                              {(rankingdata.slice(0, 3) || []).map(
                                (item, index) => (
                                  <Card
                                    className=" bg-white shadow-sm mb-2 rounded-3"
                                    key={item.id}
                                  >
                                    <CardBody className="d-flex p-2 justify-content-between align-items-center">
                                      <div className="d-flex align-items-center ">
                                        <div className="me-2 fs-6 ">
                                          {index == 0
                                            ? "🥇"
                                            : index == 1
                                              ? "🥈"
                                              : index == 2
                                                ? "🥉"
                                                : index}
                                        </div>
                                        <div className="me-2 border border-1 border-warning rounded">
                                          <img
                                            src={item.studentprofile !== null ? config.publicurl + 'profiles/' + item.studentprofile : wheelImg}
                                            alt="wheelImg"
                                            className="img-fluid rounded leaderavatar"
                                            width={25}
                                          />
                                        </div>
                                        <div className="me-2 fw-bold fs-6">
                                          {item.studentname}
                                        </div>
                                      </div>
                                      <div className="fw-bold fs-6">
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

        <Modal isOpen={modal} toggle={toggle} centered={true}>
          <ModalHeader toggle={toggle}>Contest Participation</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="amount">Amount to be paid</Label>
              <Input
                type="text"
                name="amount"
                id="amount"
                value={"₹ " + data.registrationfees}
                readOnly
              />
            </FormGroup>
            <div className="text-muted text-center mb-2">
              Your Current Wallet Amount:
              <span className="text-success fw-bold me-1">
                ₹ {wallet}
              </span>
              {data.registrationfees <= wallet ? null : (
                <div className="text-danger mb-2">Recharge Your Wallet</div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            {data.registrationfees <= wallet ? (
              <Button color="success" onClick={insertWallet}>
                Pay to Participate
              </Button>
            ) : (
              <Button color="success" onClick={() => navigate("/myFund")}>
                Add Wallet
              </Button>
            )}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default Rounds
