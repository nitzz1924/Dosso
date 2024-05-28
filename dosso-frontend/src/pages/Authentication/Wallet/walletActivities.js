import React, { useState, useEffect, useMemo } from "react";
import { Card, CardBody, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import TableContainer from "../../../components/Common/TableContainer";

const WalletActivities = ({ debit, credit, all }) => {
  const [activeTab, setActiveTab] = useState("all");

  const [debitn, setDebitn] = useState(debit || []);
  const [creditn, setCreditn] = useState(credit || []);
  const [alln, setAlln] = useState(all || []);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    setDebitn(debit || []);
    setCreditn(credit || []);
    setAlln(all || []);
  }, [debit, credit, all]);

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "created_date",
        filterable: true,
      },
      {
        Header: "TID",
        accessor: "transactionid",
        filterable: true,
      },
      {
        Header: "Amount",
        accessor: "amount",
        filterable: true,
      },
      {
        Header: "Pay Type",
        accessor: "paymenttype",
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
              className={classnames({ active: activeTab === "all" })}
              onClick={() => toggleTab("all")}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "Debit" })}
              onClick={() => toggleTab("Debit")}
            >
              Debit
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "Credit" })}
              onClick={() => toggleTab("Credit")}
            >
              Credit
            </NavLink>
          </NavItem>
        </ul>
        <div className="mt-4">
          <TableContainer
            columns={columns}
            data={
              activeTab === "all"
                ? alln
                : activeTab === "Debit"
                ? debitn
                : activeTab === "Credit"
                ? creditn
                : []
            }
            isGlobalFilter={true}
            customPageSize={10}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default WalletActivities;
