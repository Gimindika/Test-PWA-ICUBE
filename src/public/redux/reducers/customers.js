const initialState = {
  // set initial state with mock data
  customers: [
    {
      email: "customer1@gmail.com",
      name: "customer one",
      phone: "08123456789",
      address: "address"
    },
    {
      email: "customer2@gmail.com",
      name: "customer two",
      phone: "08123456789",
      address: "address"
    },
    {
      email: "customer3@gmail.com",
      name: "customer three",
      phone: "08123456789",
      address: "address"
    },
    {
      email: "customer4@gmail.com",
      name: "customer four",
      phone: "08123456789",
      address: "address"
    }
  ],
  customerDetail: {}
};

const customers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CUSTOMERS":
      return {
        ...state,
        customers: state.customers
      };

    case "GET_CUSTOMER_DETAIL":
      let customerDet = [];
      customerDet = state.customers.filter(
        customer => customer.email == action.payload.email.email
      );
      return {
        ...state,
        customerDetail: customerDet[0]
      };

    default:
      return state;
  }
};

export default customers;
