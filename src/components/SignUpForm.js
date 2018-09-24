import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions'

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
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>name:<input type='text' name='name' onChange={this.handleChange.bind(this)}/></label>
        <label>username:<input type='text' name='username' onChange={this.handleChange.bind(this)}/></label>
        <label>password:<input type='password' name='password' onChange={this.handleChange.bind(this)}/></label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default connect(null, {createUser})(SignUpForm)
