import React, { Component } from 'react'


class LogInForm extends Component {

  state = { username: '', password: '' }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>username:<input type='text' name='username' onChange={this.handleChange.bind(this)}/></label>
        <label>password:<input type='password' name='password' onChange={this.handleChange.bind(this)}/></label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default LogInForm
