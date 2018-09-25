import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

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
    return (
      <Fragment>
      <h1>{this.props.message}</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>username:<input type='text' name='username' value={this.state.username} onChange={this.handleChange.bind(this)}/></label>
        <label>password:<input type='password' name='password' value={this.state.password} onChange={this.handleChange.bind(this)}/></label>
        <button type='submit'>Submit</button>
      </form>
      </Fragment>
    )
  }
}

export default connect(null, {loginUser})(LogInForm)
