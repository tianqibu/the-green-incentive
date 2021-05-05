import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar.js";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";

import Home from "./pages/Home/Home.js";
import Impact from "./pages/Impact/Impact.js";
import Resources from "./pages/Resources/Resources.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import ActivityLog from "./pages/ActivityLog/ActivityLog.js";
import Garden from "./pages/Garden/Garden.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import Rewards from "./pages/Rewards/Rewards.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/impact" exact component={Impact} />
      <Route path="/resources" exact component={Resources} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/activity-log" exact component={ActivityLog} />
      <Route path="/garden" exact component={Garden} />
      <Route path="/rewards" exact component={Rewards} />
      <Footer />
    </Router>
  );
};

export default App;
