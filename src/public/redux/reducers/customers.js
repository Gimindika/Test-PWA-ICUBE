const initialState = {
  // set initial state with mock data
  customers: [
    {
      email: "Andi@gmail.com",
      name: "Andi Oke",
      phone: "081212121212",
      address: "Jakarta"
    },
    {
      email: "Budi@gmail.com",
      name: "Budi Wijaya",
      phone: "08134567891",
      address: "Yogyakarta"
    },
    {
      email: "Chika@gmail.com",
      name: "Chika Three",
      phone: "08823456700",
      address: "Bandar Lampung"
    },
    {
      email: "Dody@gmail.com",
      name: "Dody Iskandar",
      phone: "085293839383",
      address: "Palembang"
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
