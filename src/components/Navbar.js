import React from 'react';
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
        </div>
      </div>
    </div>
  )
}

export default Navbar
