import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./public/redux/store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CustomerList from "./components/CustomerList";
import CustomerDetail from "./components/CustomerDetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={"/customers/:email"} component={CustomerDetail} />
            <Redirect from="/customers" to="/" />
            <Route exact path="/" component={CustomerList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
