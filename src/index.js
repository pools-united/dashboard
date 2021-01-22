import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import MyProvider from "./Context/ContextProvider";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PoolPage from "views/PoolPage/PoolPage.js";
import FAQPage from "views/FAQPage/FAQPage.js";
import NewsPage from "views/News/NewsPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <MyProvider>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/profile-page" component={ProfilePage} /> */}
        <Route path="/login-page" component={LoginPage} />
        {/* <Route path="/components" component={Components} /> */}
        <Route path="/faq" component={FAQPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/pool" component={PoolPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </MyProvider>,
  document.getElementById("root")
);
