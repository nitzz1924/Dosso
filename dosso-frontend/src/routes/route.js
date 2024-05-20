import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalData } from "services/global-storage";
const Authmiddleware = (props) => {
  if (!getLocalData('userId')) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
