import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import withRouter from "components/Common/withRouter";
import "assets/scss/datatables.scss";

import { getWallet as onGetWallet } from "store/actions";
import WalletActivities from "./walletActivities";
import WalletStats from "./walletStats";


//redux
import { useSelector, useDispatch } from "react-redux";

const MyWallet = () => {

  //meta title
  document.title = "My Wallet";

  const dispatch = useDispatch();

  const { wallet } = useSelector(state => ({
    wallet: state.crypto.wallet
  }));

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    dispatch(onGetWallet());
  }, [onGetWallet]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          {!isEmpty(wallet) && (
            <Row className="justify-content-center ">
              <Col xl="3" className="p-0">
                <WalletStats
                  wallet={wallet}
                  isMenu={isMenu}
                  toggleMenu={toggleMenu}
                />
              </Col>
            </Row>
          )}
          <Row className="justify-content-center ">
            <Col lg="3" className="p-0">
              {!isEmpty(wallet["walletHistory"]) && (
                <WalletActivities />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

MyWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
};

export default withRouter(MyWallet);
