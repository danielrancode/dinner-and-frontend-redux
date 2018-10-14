import React, { Component } from 'react';
import { connect } from  'react-redux'
import '../assets/css/Navbar.css'
import logo from '../assets/logo-horizontal-onwhite.png'
import SearchForm from './SearchForm';



const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo-horizontal">
          <img src={logo}/>
        </div>
        <SearchForm />
    </div>
  )
}

export default Navbar
