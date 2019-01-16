import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from  'react-redux'
import { logout } from '../actions'
import '../assets/css/Navbar.css'
import logo from '../assets/logo-horizontal-onwhite.png'
import SearchForm from './SearchForm';

const Navbar = ({loggedIn, logout}) => {
  return (
      <div className="navbar">
        <div className="navbar-content">
          <div className="attached-to-left">

            <div className="logo-horizontal">
              <img src={logo} alt="logo"/>
            </div>

            <SearchForm />

            <div className="side-buttons-container">
              { !loggedIn && <Link to="/login"><button className="auth-button login">Log In</button></Link> }
              { !loggedIn && <Link to="/signup"><button className="auth-button signup">Sign Up</button></Link> }
              { loggedIn && <Link to="/programs"><button className="auth-button login">My Programs</button></Link> }
              { loggedIn && <button className="auth-button" onClick={logout}>Log Out</button>}
            </div>

          </div>
        </div>
      </div>
  )
}

export default connect(s => s.user, { logout })(Navbar)
