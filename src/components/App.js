import React from 'react';
import '../assets/css//App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProgramMaker from './containers/ProgramMaker'
import MyPrograms from './containers/MyPrograms'
import ProgramView from './containers/ProgramView'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'

const App = () => {
return (
        <Router>
          <div className="navbar">

            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/programs'>My Programs</Link>
              </li>
              <li>
                <Link to='/programs/:id'>Program View</Link>
              </li>
            </ul>

            <Route path="/" component={ProgramMaker} exact />
            <Route path="/programs" component={MyPrograms} exact />
            <Route path="/programs/:id" component={ProgramView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </div>
        </Router>
    )
}
export default App;
