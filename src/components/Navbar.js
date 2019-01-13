import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from  'react-redux'
import '../assets/css/Navbar.css'
import logo from '../assets/logo-horizontal-onwhite.png'
import SearchForm from './SearchForm';
import { logout } from '../actions'

const Navbar = ({user, logout}) => {
  return (
      <div className="navbar">
        <div className="navbar-content">
          <div className="attached-to-left">

            <div className="logo-horizontal">
              <img src={logo} alt="logo"/>
            </div>

            <SearchForm />

            <div className="side-buttons-container">
              { !user.loggedIn && <Link to="/login"><button className="auth-button login">Log In</button></Link> }
              { !user.loggedIn && <Link to="/signup"><button className="auth-button signup">Sign Up</button></Link> }
              { user.loggedIn && <Link to="/programs"><button className="auth-button login">My Programs</button></Link> }
              { user.loggedIn && <button className="auth-button" onClick={logout}>Log Out</button>}
            </div>

          </div>
        </div>
      </div>
  )
}

export default connect(state => state, { logout })(Navbar)
