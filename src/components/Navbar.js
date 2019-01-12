import React from 'react';
import { Link } from 'react-router-dom'
// import { connect } from  'react-redux'
import '../assets/css/Navbar.css'
import logo from '../assets/logo-horizontal-onwhite.png'
import SearchForm from './SearchForm';



const Navbar = () => {
  return (
      <div className="navbar">
        <div className="navbar-content">
          <div className="attached-to-left">

            <div className="logo-horizontal">
              <img src={logo} alt="logo"/>
            </div>

            <SearchForm />

            <div className="side-buttons-container">
              <Link to="/login"><button className="auth-button login">Log In</button></Link>
              <Link to="/signup"><button className="auth-button signup">Sign Up</button></Link>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Navbar
