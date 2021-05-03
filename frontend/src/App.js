import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";

import Home from "./pages/Home";
import Impact from "./pages/Impact";
import Resources from "./pages/Resources";
import Dashboard from "./pages/Dashboard";
import Garden from "./pages/Garden";
import ContactUs from "./pages/ContactUs";

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
      <Route path="/garden" exact component={Garden} />
      <Footer />
    </Router>
  );
};

export default App;
