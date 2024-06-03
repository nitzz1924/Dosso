import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row, Spinner } from 'reactstrap';
import axiosRetry from "axios-retry"
import axios from "axios"
import config from "constants/config"
import MockAdapter from "axios-mock-adapter"
const Notifications = () => {
  document.title = "Notifications";
  const navigate = useNavigate();
  const axiosInstance = axios.create()
  const mockAdapter = new MockAdapter(axiosInstance)
  axiosRetry(axiosInstance, { retries: 3 })
  const [loading, setLoading] = useState(true)
  const [nortificationdata, setNortificationData] = useState([])

  const getallnortifications = async () => {
    setLoading(true)
    try {
      const response = await fetch(config.apiUrl + "getallnortifications", {
        method: 'GET',
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log("All Nortifications:", data);
      setNortificationData(data); // Assuming you have this function to set the data
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getallnortifications()
  }, [])

  if (loading) {
    return <div className="page-content">
      <div className="card mt-5" aria-hidden="true">
        
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
          <a href="#" className="btn btn-secindary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
  }
  return (
    <div>
      <div className="page-content">
        <Container fluid >
          <Row className="justify-content-center">
            <div className="col-lg-3 d-flex justify-content-between align-content-center my-2">
              <div className="fs-3 fw-bold text-center">Inbox</div>
              <Button onClick={() => navigate('/contests')} className="btn btn-soft-secondary waves-effect waves-light fw-bold">
                Back
              </Button>
            </div>
          </Row>
          <Row className="justify-content-center my-3 p-0">
            <Col lg="3" className="p-0">
              {nortificationdata.map((item, key) => (
                <Card className='shadow-lg mb-3 rounded-3' key={item.id}>
                  <CardHeader className='bg-dark p-2 text-warning d-flex justify-content-between rounded'>
                    <div className='fw-bold'>Admin Message</div>
                    <div className='text-end text-white'>Time: {item.created_date}</div>
                  </CardHeader>
                  <CardBody className="border-top bg-subtle-success">
                    <Row>
                      <Col>
                        <p className="text-muted mb-2">{item.message}</p>
                      </Col>
                    </Row>
                  </CardBody>

                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Notifications;
