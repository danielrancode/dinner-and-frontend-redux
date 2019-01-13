import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProgramMaker from './containers/ProgramMaker'
import MyPrograms from './containers/MyPrograms'
import ProgramView from './containers/ProgramView'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import { connect } from 'react-redux'
import { loginUser, logout } from '../actions'
import '../assets/css/App.css'
import Navbar from './Navbar.js'

const App = (props) => {
  return (
        <Router>
          <div className="wrapper">
            <Navbar />
            <Route path="/" component={ProgramMaker} exact />
            <Route path="/programs" component={MyPrograms} exact />
          {/*  <Route path="/programs/:id" component={ProgramView} /> */}
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </div>
        </Router>
    )
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { loginUser, logout })(App);
