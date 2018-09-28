import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../SignUpForm'

const SignUp = () => {
  return (
    <Fragment>
    <SignUpForm />
    <h5>Already have an account? <Link to="/login">Log In</Link></h5> 
    </Fragment>
  )
}

export default SignUp
