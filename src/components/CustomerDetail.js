// import React from "react";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCustomerDetail } from "../public/redux/actions/customers";

class CustomerDetail extends Component {
  state = {
    customer: {}
  };

  componentDidMount = async () => {
    // grab parameter from link
    const {
      match: { params }
    } = this.props;

    await this.props.dispatch(getCustomerDetail(params));
    const customer = this.props.customerDetail;
    this.setState({ customer });
  };

  render() {
    const { customer } = this.state;
    return (
      <React.Fragment>
        {customer.email != "" ? (
          <div>
            <p>Name : {customer.name}</p>
            <p>Email : {customer.email}</p>
            <p>Phone : {customer.phone}</p>
            <p>Address : {customer.address}</p>

            <div>
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
  }
}

function mapStateToProps(state) {
  return {
    customerDetail: state.customers.customerDetail
  };
}

export default connect(mapStateToProps)(CustomerDetail);
