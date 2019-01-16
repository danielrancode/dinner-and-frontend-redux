import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import '../assets/css/LoginForm.css'


class LogInForm extends Component {
  state = { username: '', password: '' }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.loginUser(this.state)
    this.setState({ username: '', password: '' })
  }

  render() {
    const { loggedIn, from, message } = this.props
    const { username, password } = this.state

    if (loggedIn) {
      return <Redirect to={from || "/"} />
    }

    return (
      <Fragment>
      <h1 style={{color: 'red'}}>{message}</h1>
      <form onSubmit={this.handleSubmit.bind(this)} className="form-container">
        <div className="form-entry">
          <div>
            <label>Username:</label>
          </div>
          <div>
             <input type='text' name='username' value={username} onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <div className="form-entry">
          <div>
            <label>Password:</label>
          </div>
          <div>
             <input type='password' name='password' value={password} onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        <div className="form-entry">
          <button type='submit' className="button">Log In</button>
        </div>
        <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
      </form>

      </Fragment>
    )
  }
}

export default connect(s => s.user, {loginUser})(LogInForm)
