import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'

const App = () => {
    return (
        <Router>
          
          <Route path='/sign-in' exact render={() =>
            <SignIn/>
          } />
        </Router>
    );
}

export default App;