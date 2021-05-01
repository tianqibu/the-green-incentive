import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'

import Home from './pages/Home'
import Impact from './pages/Impact'

const App = () => {
  return (
    <Router>
      <Route path='/' exact render={() =>
        <Home />
      } />
      <Route path='/sign-in' exact render={() =>
        <SignIn />
      } />
      <Route path='/sign-up' exact render={() =>
        <SignUp />
      } />
      <Route path='/impact' exact component={Impact} />
    </Router>
    
  );
}

export default App;