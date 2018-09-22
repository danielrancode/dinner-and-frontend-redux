import React, { Component } from 'react';
import { connect } from  'react-redux'
import { shuffle, searchRestaurants, searchEvents } from '../actions.js'

class SearchForm extends Component {
  state = {
    display: 'full',
    type: '',
    params: {
      foodType: '',
      eventType: '',
      location: {},
      date: {},
      time: {},
    },
  }

  handleChange = (e) => {
    this.setState({params: {...this.state.params, [e.target.name]: e.target.value }})
  }

  handleClickSearch = (e) => {
    this.setState({type: 'search', display: 'top'})
    this.props.searchRestaurants(this.state)
    this.props.searchEvents(this.state)
  }

  handleClickShuffle = (e) => {
    let params = this.state.params
    this.setState({type: 'shuffle', display: 'top'})
    this.props.searchRestaurants(this.state)
    this.props.searchEvents(this.state)
  }

  render() {
    let params = this.state.params
    // console.log(this.state)

    return (
      <form className={this.state.display}>
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
        <input type='button' value='search' onClick={() => this.handleClickSearch()}/>
        <input type='button' value='shuffle' onClick={() => this.handleClickShuffle()} hidden/>
      </form>
    )
  }
}

// const mapStateToProps = (state) => {
//   debugger
//   console.log("current search type:", state.search.type)
//   return { type: state.type }
// }

export default connect(null, {shuffle, searchRestaurants, searchEvents})(SearchForm)
