import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from  'react-redux'
import { logout } from '../actions'
// import '../assets/css/Navbar.css'
import logo from '../assets/DinnerAndWhite.png'
import SearchForm from './SearchForm';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



const Navbar = ({loggedIn, logout}) => {
  return (
    <AppBar>
      <Toolbar>
      <ButtonBase><img src={logo} style={{width: '50%', padding: '5%'}}/></ButtonBase>
          <SearchForm />

          <div className="side-buttons-container">
            { !loggedIn && <Link to="/login"><Button>Log In</Button></Link> }
            { !loggedIn && <Link to="/signup"><Button>Sign Up</Button></Link> }
            { loggedIn && <Link to="/programs"><Button >My Programs</Button></Link> }
            { loggedIn && <Button onClick={logout}>Log Out</Button>}
          </div>
          </Toolbar>

    </AppBar>
  )
}

export default connect(s => s.user, { logout })(Navbar)
