import React from "react";

import { Link } from "react-router-dom";

import "../styles/CustomerDetail.css";

const CustomerDetail = props => {
  const { customer } = props.location.state;
  return (
    <React.Fragment>
      {customer.email != "" ? (
        <div className="customerdetail-container">
          <h1 className="title-text">{customer.name}</h1>
          <p>Name : {customer.name}</p>
          <p>Email : {customer.email}</p>
          <p>Phone : {customer.phone}</p>
          <p>Address : {customer.address}</p>

          <div className="homebutton-container">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div />
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </React.Fragment>
  );
};

export default CustomerDetail;


