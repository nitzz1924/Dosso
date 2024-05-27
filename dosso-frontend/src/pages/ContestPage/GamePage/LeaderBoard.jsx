import React, { useState, useEffect } from "react";
import { Container, Row, Card, CardBody, Button, Col } from "reactstrap";
import config from "constants/config";
let wheelImg = "Assets/images/star.png"; // Correct import
import axios from "axios";
import axiosRetry from "axios-retry";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLocalData } from "services/global-storage";

const LeaderBoard = () => {
  document.title = "Leaderboard";
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  
  const [rankingdata, setrankingdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = axios.create();
  axiosRetry(axiosInstance, { retries: 4 });

  const RankingList = async () => {
    try {
      const response = await axiosInstance.get(config.apiUrl + "getpoints/" + data.id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Ranking Data:", response.data);
      setrankingdata(response.data);
    } catch (error) {
      console.log("error->", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    RankingList();
  }, []);

  if (loading) {
    return <div>Loading......</div>;
  }

  const loggedInUserId = getLocalData("userId");
  const userRanks = rankingdata.filter(item => item.studentId === loggedInUserId);

  return (
    <>
      <div className="page-content">
        <Container fluid className="">
          <Row className="justify-content-center">
            <div className="col-lg-3 d-flex justify-content-between align-content-center my-2">
              <div className="fs-3 fw-bold text-center">Your Ranking</div>
              <Link to="/" className="">
                <Button className="btn btn-soft-secondary waves-effect waves-light fw-bold">
                  Back
                </Button>
              </Link>
            </div>
          </Row>
          {userRanks.length > 0 && (
            <Row className="justify-content-center my-3 p-0">
              <Col lg="3" className="p-0 border-bottom">
                {userRanks.map((userRank, index) => (
                  <Card className="bg-white shadow-sm mb-2 rounded-3" key={userRank.id}>
                    <CardBody className="d-flex p-2 border border-success text-white text-capitalize bg-success rounded-3 justify-content-between align-items-center">
                      <div className="d-flex align-items-center justify-content-evenly ">
                        <div className="me-2 fs-6">
                          # {rankingdata.findIndex(item => item.id === userRank.id) + 1}
                        </div>
                        <div className="me-2">
                          <img
                            src={userRank.studentprofile || wheelImg}
                            alt="studentprofile"
                            className="img-fluid"
                            width={25}
                          />
                        </div>
                        <div className="me-2 fw-bold fs-5">{userRank.studentname}</div>
                      </div>
                      <Button
                        onClick={() => navigate("/history")}
                        className="btn btn-light rounded-pill px-3 waves-effect waves-light fw-bold"
                      >
                        Reward
                      </Button>
                      <div className="fw-bold fs-5">{userRank.point} pts</div>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Row>
          )}
          <Row className="justify-content-center my-3 p-0">
            <Col lg="3" className="p-0">
              <div className="fs-3 fw-bold text-center">Top 20 Ranking</div>

              {rankingdata.slice(0, 20).map((item, index) => (
                <Card className="bg-white shadow-sm mb-2 rounded-3" key={item.id}>
                  <CardBody className="d-flex p-2 justify-content-between align-items-center text-capitalize">
                    <div className="d-flex align-items-center">
                      <div className="me-2 fs-3 border-end">
                        {index === 0
                          ? "🥇"
                          : index === 1
                          ? "🥈"
                          : index === 2
                          ? "🥉"
                          : index + 1}
                      </div>
                      <div className="me-2">
                        <img
                          src={item.studentprofile || wheelImg}
                          alt="studentprofile"
                          className="img-fluid"
                          width={25}
                        />
                      </div>
                      <div className="me-2 fw-bold fs-5">{item.studentname}</div>
                    </div>
                    <div className="fw-bold fs-5">{item.point} pts</div>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LeaderBoard;
