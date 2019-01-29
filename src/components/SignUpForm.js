import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions'
// import '../assets/css/SignupForm.css'


class SignUpForm extends Component {

  state = { name: '', username: '', password: '' }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createUser(this.state)
    this.setState({ name: '', username: '', password: '' })
  }

  render() {
    const { loggedIn, from } = this.props
    const { name, username, password } = this.state

    if (loggedIn) {
      return <Redirect to={from || "/"} />
    }
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-container">
          <div className="form-entry">
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input type='text' name='name' value={name} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
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
            <button type='submit' className="button">Sign Up</button>
          </div>
          <div>Already have an account? <Link to="/login">Log In</Link></div>
        </form>
      </Fragment>
    )
  }
}

export default connect(s => s.user, {createUser})(SignUpForm)
