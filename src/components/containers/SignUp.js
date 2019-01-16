import React, { Fragment } from 'react'
import withAuth from '../hoc/withAuth'
import SignUpForm from '../SignUpForm'


const SignUp = (props) => {
  return (
    <Fragment>
    <SignUpForm from={ props ? props.location ? props.location.state ? props.location.state.from.pathname : null : null : null}/>
    </Fragment>
  )
}

export default withAuth(SignUp)
