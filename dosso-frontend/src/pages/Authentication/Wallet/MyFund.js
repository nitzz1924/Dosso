import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { isEmpty } from "lodash"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import withRouter from "components/Common/withRouter"
import "assets/scss/datatables.scss"
import WalletActivities from "./walletActivities"
import WalletStats from "./walletStats"
import axios from "axios"
import axiosRetry from "axios-retry"
import config from "constants/config"

//redux
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getLocalData } from "services/global-storage"

const MyWallet = () => {
  //meta title
  document.title = "My Wallet"
  const [wallet, setWallet] = useState(0)
  const [credithis, setCredithis] = useState([])
  const [debithis, setDebithis] = useState([])
  const [allhis, setAllhis] = useState([])
  const [loading, setLoading] = useState(true)
  const [kycstatus, setKycStatus] = useState([])

  // Create a new instance of axios
  const axiosInstance = axios.create()
  axiosRetry(axiosInstance, { retries: 3 })

  const [isMenu, setIsMenu] = useState(false)
  const getWalletData = async () => {
    try {
      const response = await axiosInstance.get(
        config.apiUrl + "walletamount/" + getLocalData("userId"),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log("Wallet  Data : ", response.data)
      setCredithis(response.data.credithistory)
      setDebithis(response.data.debithistory)
      setAllhis(response.data.transaction)
      setWallet(response.data.walletamount)
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }
  const showkycstatus = async () => {
    try {
      const response = await axiosInstance.get(
        config.apiUrl + "showkycstatus/" + getLocalData("userId"),
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log("Status Data : ", response.data)
      const data = Array.isArray(response.data)
        ? response.data
        : [response.data]
      setKycStatus(data)
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getWalletData()
    showkycstatus()
  }, [])
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  if (loading) {
    return <div>Loading......</div>
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {kycstatus.map((item, key) => (
            <Row className="justify-content-center" key={key}>
              <Col lg="3" className={item.color}>
                <div className="mb-2">{item.message}</div>
                {item.status === null && (
                  <Link to="/playerkyc">
                    <button className="btn btn-info">Complete KYC</button>
                  </Link>
                )}
                {item.status === 2 && (
                  <Link to="/playerkyc">
                    <button className="btn btn-info">Complete KYC</button>
                  </Link>
                )}
                {item.status === 3 && (
                  <Link to="/playerkyc">
                    <button className="btn btn-info">Complete KYC</button>
                  </Link>
                )}
              </Col>
            </Row>
          ))}
          {wallet && (
            <Row className="justify-content-center ">
              <Col xl="3" className="p-0">
                <WalletStats
                  wallet={wallet<=0?'0':wallet}
                  isMenu={isMenu}
                  toggleMenu={toggleMenu}
                />
              </Col>
            </Row>
          )}
          <Row className="justify-content-center ">
            <Col lg="3" className="p-0">
              {wallet && (
                <WalletActivities
                  debit={debithis}
                  credit={credithis}
                  all={allhis}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

MyWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

export default withRouter(MyWallet)
