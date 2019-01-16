import React, { Fragment } from 'react'
import LogInForm from '../LogInForm'
import withAuth from '../hoc/withAuth'

const LogIn = (props) => {
  return (
    <Fragment>
      <LogInForm from={ props ? props.location ? props.location.state ? props.location.state.from.pathname : null : null : null}/>
    </Fragment>
  )
}

export default withAuth(LogIn)
