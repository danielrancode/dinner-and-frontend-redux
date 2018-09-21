import React, { Component } from 'react';
import { connect } from  'react-redux'

class SearchForm extends Component {
  state = {
    display: 'full',
    foodType: '',
    eventType: '',
    location: {},
    date: {},
    time: {},
  }

  handleChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({display: 'top'})
    // console.log(this.state)
  }

  render() {
    // console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>foodType: <input type='text' name='foodType' value={this.state.foodType} onChange={this.handleChange}/></label>
        <label>eventType: <input type='text' name='eventType' value={this.state.eventType} onChange={this.handleChange}/></label>
        <label>
          location:
            <select name='location' value={this.state.location} onChange={this.handleChange}>
              <option value='11238'>11238</option>
              <option value='90210'>90210</option>
              <option value='10025'>10025</option>
            </select>
          </label>
        <label>
          date:
            <select name='date' value={this.state.location} onChange={this.handleChange}>
              <option value='today'>today</option>
            </select>
          </label>
        <label>
          time:
            <select name='time' value={this.state.location} onChange={this.handleChange}>
              <option value='now'>now</option>
            </select>
        </label>
        <button type='submit' name='submit'>Search</button>
        <button type='shuffle' name='shuffle'>Shuffle</button>
      </form>
    )
  }
}

export default SearchForm
