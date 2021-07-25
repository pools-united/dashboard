import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import MyProvider from "./Context/ContextProvider";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import ReactGA from 'react-ga';

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PoolPage from "views/PoolPage/PoolPage.js";
import FAQPage from "views/FAQPage/FAQPage.js";
import NewsPage from "views/News/NewsPage.js";
import ContactUs from "views/ContactUs/ContactUs";
import CpuToken from "views/Cpu_token/CpuTokenPage";
import CpuDonations from "views/Cpu_donations/CpuDonationsPage";
import DonationsEmbeded from "views/Cpu_donations_embeded/CpuDonationsPage"


var hist = createBrowserHistory();

const TRACKING_ID = "UA-202282581-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
hist.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <MyProvider>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/profile-page" component={ProfilePage} /> */}
        <Route path="/login-page" component={LoginPage} />
        {/* <Route path="/components" component={Components} /> */}
        <Route path="/faq" component={FAQPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/cpu-token" component={CpuToken} />
        <Route path="/cpu-donations" component={CpuDonations} />
        <Route path="/cpu-donations-embeded" component={DonationsEmbeded} />
        <Route path="/pool" component={PoolPage} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </MyProvider>,
  document.getElementById("root")
);
