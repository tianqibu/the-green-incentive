import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'

import Home from './pages/Home'
import Impact from './pages/Impact'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/sign-in' exact component={SignIn} />
      <Route path='/sign-up' exact component={SignUp} />
      <Route path='/impact' exact component={Impact} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Router>
    
  );
}

export default App;