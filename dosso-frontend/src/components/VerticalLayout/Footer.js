import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import feather from "feather-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  useEffect(() => {
    // Replace Feather icons
    feather.replace();

    // Set focus on the first .nav-item element
    const firstNavItem = document.querySelector(".nav-item");
    if (firstNavItem) {
      firstNavItem.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <div className="mobile-nav">
        <nav>
          <Link to="/" className="nav-item" >
            <i data-feather="home" className=""></i>
            Home
          </Link>

          <Link to="/history" className="nav-item" >
            <i data-feather="play-circle" className=""></i>
            My Contests
          </Link>

          <Link to="/refer" className="nav-item" >
            <i data-feather="users" className=""></i>
            <div>Refer & Earn</div>
          </Link>
        </nav>
      </div>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} © Dosso21.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Yuvmedia
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
