import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from 'react'

import Navbar from "./components/Navbar/Navbar.js";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import Footer from "./components/Footer/Footer.js";


import Home from "./pages/Home/Home";
import Impact from "./pages/Impact/Impact";
import Resources from "./pages/Resources/Resources";
import Dashboard from "./pages/Dashboard/Dashboard";
import Garden from "./pages/Garden/Garden";
import ContactUs from "./pages/ContactUs/ContactUs";
import Rewards from './pages/Rewards/Rewards'

const App = () => {

   useEffect(() => {

      const fetchAllActivities = async () => {
        const res = await fetch('/api/activities', {
          method: 'GET',
        })

        const data = await res.json()
        console.log(data)
        console.log('test')
        return data
      }

      fetchAllActivities()

    }, [])

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
      <Route path='/rewards' exact component={Rewards}/>
      <Footer />
    </Router>
  );
};

export default App;
