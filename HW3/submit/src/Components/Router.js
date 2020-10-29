import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./Header"
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => (
  <Router>
    <Header />
    <Route path="/coins" exact component={Coins} />
    <Route path="/exchanges" exact component={Exchanges} />
    <Route path="/prices" exact component={Prices} />
    <Redirect from="*" to="/coins" />
  </Router>
);
