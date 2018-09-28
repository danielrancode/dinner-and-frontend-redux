import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogInForm from '../LogInForm'

const LogIn = () => {
  return (
    <Fragment>
      <LogInForm />
      <h5>Don't have an account? <Link to="/signup">Sign Up</Link></h5>
    </Fragment>
  )
}

export default LogIn
