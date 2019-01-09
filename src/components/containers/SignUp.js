import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../SignUpForm'
import withAuth from '../hoc/withAuth'


const SignUp = (props) => {
  return (
    <Fragment>
    <SignUpForm from={ props ? props.location ? props.location.state ? props.location.state.from.pathname : null : null : null}/>
    <h5>Already have an account? <Link to="/login">Log In</Link></h5>
    </Fragment>
  )
}

export default withAuth(SignUp)
