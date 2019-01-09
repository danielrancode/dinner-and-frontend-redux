import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogInForm from '../LogInForm'
// import '../../assets/css/Login.css'

const LogIn = (props) => {
  // console.log("LogIn props", props)
  return (
    <Fragment>
      <LogInForm from={props.location.state ? props.location.state.from.pathname : null}/>
      <div>
        <h5>Don't have an account? <Link to="/signup">Sign Up</Link></h5>
      </div>
    </Fragment>
  )
}

export default LogIn
