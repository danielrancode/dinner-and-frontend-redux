import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import '../assets/css/App.css'

import ProgramMaker from './containers/ProgramMaker'
import MyPrograms from './containers/MyPrograms'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import Navbar from './Navbar.js'

import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <Route path="/" component={ProgramMaker} exact />
          <Route path="/programs" component={MyPrograms} exact />
        {/*  <Route path="/programs/:id" component={ProgramView} /> */}
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </div>
      </BrowserRouter>
    </React.Fragment>

    )
}

export default App;
