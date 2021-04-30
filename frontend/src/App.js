import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Impact from './pages/Impact'

const App = () => {
    return (
        <Router>
          
          <Route path='/sign-in' exact render={() =>
            <SignIn/>
          } />
          <Route path='/impact' exact component={Impact} />
        </Router>
    );
}

export default App;