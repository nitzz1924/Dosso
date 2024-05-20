import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { Card, CardBody, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { getCryptoProducts as onGetCryptoProducts } from "store/actions";
import TableContainer from "../../../components/Common/TableContainer";
import { useDispatch, useSelector } from 'react-redux';

const WalletActivities = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("all");

  const { products } = useSelector(state => ({
    products: state.crypto.products,
  }));

  const [productData, setSetProductData] = useState([products]);

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    dispatch(onGetCryptoProducts());
    if(activeTab !== 'all'){
      var allProduct = products.filter(product =>
        product.type === activeTab
      );
    }else{
      var allProduct = products;
    }

    setSetProductData(allProduct)
  }, [activeTab]);

  const columns = useMemo(
    () => [
      {
        Header: "Id No",
        accessor: "idno",
        filterable: true,
        
      },
      {
        Header: "Date",
        accessor: "pdate",
        filterable: true,
        
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: true,
        
      },
      {
        Header: "Currency",
        accessor: "coin",
        filterable: true,
        
      },
      {
        Header: "Amount",
        accessor: "amount",
        filterable: true,
        
      },
      {
        Header: "Amount in USD",
        accessor: "valueInUsd",
        filterable: true,
        
      },
    ],
    []
  );

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">Transactions</h4>
        <ul className="nav nav-tabs nav-tabs-custom">
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "all",
              })}
              onClick={() => {
                toggleTab("all");
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "Buy",
              })}
              onClick={() => {
                toggleTab("Buy");
              }}
            >
              Credit
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "Sell",
              })}
              onClick={() => {
                toggleTab("Sell");
              }}
            >
              Debit
            </NavLink>
          </NavItem>
        </ul>
        <div className="mt-4">
          <TableContainer
            columns={columns}
            data={activeTab !== 'all' ? productData : products}
            isGlobalFilter={true}
            customPageSize={10}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default WalletActivities;
