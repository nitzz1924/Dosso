import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardFooter } from "reactstrap"

//Import Images
let wheelImg = "Assets/images/fortune-wheel.png"

function CardWelcome({ title }) {
  return (
    <React.Fragment>
      <Col xl="12">
        <Row className="my-2">
          <Col className="d-grid align-content-center">
            <div className="fs-5 fw-bold text-secondary">{title}</div>
          </Col>
          <Col>
            <div className="fs-6 float-end rounded-pill border py-2 px-3 text-secondary">
              Spins Remaining: 7
            </div>
          </Col>
        </Row>
        <Card className="button-85  mt-3">

          <Row className=" pt-3 px-3">
            <Col xs="8" className="d-grid align-content-center ">
              <div className=" ">
                <div className="text-secondary">
                  <h1 className="text-black text-uppercase fw-bolder ">Play To Win 🏆</h1>
                  <h6>Earn Many Scholarships</h6>
                </div>

                <div className="text-warning fw-bold mt-2">
                  MEGA ₹20 lakhs Pool
                </div>

              </div>

            </Col>
            <Col xs="4" className="align-self-end ">
              <img src={wheelImg} alt="" className="img-fluid" />
            </Col>

          </Row>
          <CardFooter className="mt-3 bg-white rounded-4 ">
            <Link to="/contests" >
              {/* <Button className="btn btn-soft-warning waves-effect waves-light btn-secondary fw-bold"> Play Now</Button> */}
              <button className="button-29 w-100 fw-bold" role="button">Try Your Luck!</button>

            </Link>

          </CardFooter>
        </Card>
      </Col>
    </React.Fragment>
  );
}

export default CardWelcome;