import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getCustomers } from "../public/redux/actions/customers";

import "../styles/CustomerList.css";

class CustomerList extends Component {
  state = {
    customers: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCustomers());
    const customers = this.props.customers;
    this.setState({
      customers
    });
  };

  render() {
    const { customers } = this.state;
    return (
      <div className="customer-list-container">
        <h1 className="title-text">Customer List</h1>
        <ul>
          {customers.length &&
            customers.map(customer => {
              return (
                <Link
                  className="customer-email-list"
                  key={customer.email}
                  to={{
                    pathname: `/customers/${customer.email}`,
                    state: {
                      customer: customer
                    }
                  }}
                >
                  <li>{customer.email}</li>
                </Link>
              );
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.customers
  };
}

export default connect(mapStateToProps)(CustomerList);
