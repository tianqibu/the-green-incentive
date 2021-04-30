import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'

const App = () => {
  return (
    <Router>

      <Route path='/sign-in' exact render={() =>
        <SignIn />
      } />
      <Route path='/sign-up' exact render={() =>
        <SignUp />
      } />
    </Router>
    
  );
}

export default App;