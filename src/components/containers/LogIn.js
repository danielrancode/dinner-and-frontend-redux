import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogInForm from '../LogInForm'
import withAuth from '../hoc/withAuth'

// import '../../assets/css/Login.css'

const LogIn = (props) => {
  // console.log("LogIn props", props)
  // debugger
  return (
    <Fragment>
      <LogInForm from={ props ? props.location ? props.location.state ? props.location.state.from.pathname : null : null : null}/>
    </Fragment>
  )
}

export default withAuth(LogIn)
