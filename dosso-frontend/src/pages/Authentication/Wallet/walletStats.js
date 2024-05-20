import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"
import { Link , useNavigate } from "react-router-dom"

const WalletStats = ({ wallet, isMenu, toggleMenu }) => {
const navigate = useNavigate()
  return (
    <Card>

      <CardBody className="border-top">
        <Row>
          <Col className="d-grid   align-items-center ">
            <div>
              <p className="text-muted mb-2 text-center">Available Balance</p>
              <h3 className="text-center fw-bold text-success ">₹{wallet}</h3>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="border-top">
        <div className="text-center fw-bold fs-3 mb-2">Transact</div>
        <div className="text-center">
          <Row>
            <Col xs="6">
              <div className="border pb-2 rounded border-2">
                <div className="font-size-45 text-secondary mb-2">
                  <i className='bx bx-money'></i>
                </div>

                <div className="">
                  <div  onClick={() => navigate("/addfund", { state: wallet })}  className="btn btn-success fw-bold w-md">
                    Add Money
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="6">
              <div className="border pb-2 rounded border-2">
                <div className="font-size-45 text-secondary mb-2">
                  <i className='bx bxs-bank'></i>
                </div>

                <div className="">
                  <Link to="#" className="btn btn-danger fw-bold w-md">
                    Withdraw
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  )
}

WalletStats.propTypes = {
  wallet: PropTypes.any,
}

export default WalletStats
