import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions'
import '../assets/css/SignupForm.css'


class SignUpForm extends Component {

  state = { name: '', username: '', password: '' }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.props.createUser(this.state)
    this.setState({ name: '', username: '', password: '' })
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to={this.props.from || "/"} />
    }
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-container">
          <div className="form-entry">
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div className="form-entry">
            <div>
              <label>Username:</label>
            </div>
            <div>
              <input type='text' name='username' value={this.state.username} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div className="form-entry">
            <div>
              <label>Password:</label>
            </div>
            <div>
              <input type='password' name='password' value={this.state.password} onChange={this.handleChange.bind(this)}/>
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

const mapStateToProps = (state) => {
  return state.user
}

export default connect(mapStateToProps, {createUser})(SignUpForm)
