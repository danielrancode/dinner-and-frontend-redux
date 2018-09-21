import React, { Component } from 'react';
import { connect } from  'react-redux'
import { shuffle, searchRestaurantsAndEvents } from '../actions.js'

class SearchForm extends Component {
  state = {
    display: 'full',
    params: {
      foodType: '',
      eventType: '',
      location: {},
      date: {},
      time: {},
    },
  }

  handleChange = (e) => {
    this.setState({...this.state, params: {...this.state.params, [e.target.name]: e.target.value }})
  }

  render() {
    let params = this.state.params

    return (
      <form>
        <label>foodType: <input type='text' name='foodType' value={params.foodType} onChange={this.handleChange}/></label>
        <label>eventType: <input type='text' name='eventType' value={params.eventType} onChange={this.handleChange}/></label>
        <label>
          location:
            <select name='location' value={params.location} onChange={this.handleChange}>
              <option value='11238'>11238</option>
              <option value='90210'>90210</option>
              <option value='10025'>10025</option>
            </select>
          </label>
        <label>
          date:
            <select name='date' value={params.date} onChange={this.handleChange}>
              <option value='today'>today</option>
            </select>
          </label>
        <label>
          time:
            <select name='time' value={params.time} onChange={this.handleChange}>
              <option value='now'>now</option>
            </select>
        </label>
        <input type='button' value='search' onClick={() => this.props.searchRestaurantsAndEvents(this.state.params)}/>
        <input type='button' value='shuffle' onClick={() => this.props.shuffle(this.state.params)}/>
      </form>
    )
  }
}

export default connect(null, {shuffle, searchRestaurantsAndEvents})(SearchForm)
