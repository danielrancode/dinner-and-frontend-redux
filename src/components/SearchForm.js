import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from  'react-redux'
import { searchRestaurants, searchEvents } from '../actions.js'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import '../assets/css/SearchForm.css'
import DatePicker from 'react-datepicker'
import LocationSearchInput from './LocationSearchInput.js'

class SearchForm extends Component {
  state = {
    message: '',
    params: {
      foodType: 'dinner',
      eventType: 'concert',
      lat: 40.7687,
      lon: -73.9918,
      date: moment(),
      dateParam: this.formatDate(moment()),
    },
  }

  formatDate(date) {
    let yyyy = date._d.getFullYear().toString()
    let mm = (date._d.getMonth() + 1).toString().length === 2 ? (date._d.getMonth() + 1).toString() : `0${date._d.getMonth() + 1}`
    let dd = date._d.getDate().toString().length === 2 ? date._d.getDate().toString() : `0${date._d.getDate()}`
    return `${yyyy}-${mm}-${dd}`
  }

  handleChange(e) {
      this.setState({params: {...this.state.params, [e.target.name]: e.target.value }})
  }

  handleFoodChange(e) {
    const ROOT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`
      this.setState(
        {params: {...this.state.params, [e.target.name]: e.target.value }},
        () => {
          let params = this.state.params
          fetch(`${ROOT}/restaurants/autocomplete?text=${params.foodType}&latitude=${params.lat}&longitude=${params.lon}`,
          { method: 'GET',
            headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
          })
        .then(res => res.json())
        .then(data => console.log(data))
      }
      )
  }

  handleDateChange(date) {
    this.setState({params: {...this.state.params, date: date, dateParam: this.formatDate(date) }})
  }

  handleLocationChange(latLng) {
    this.setState({params: {...this.state.params, lat: latLng.lat, lon: latLng.lng}})
  }

  handleClickSearch(e) {
    let { searchRestaurants, searchEvents } = this.props
    let p = this.state.params

    e.preventDefault()

    if (p.foodType && p.eventType && p.lat && p.lon) {
      this.setState({message: ''})
      searchRestaurants(this.state)
      searchEvents(this.state)
    } else {
      this.setState({message: 'invalid search params'})
    }
  }

  render() {

    return (
        <form className="search-form">
          <div className="search-form-main">
            <div className="form-row restaurant-and-event">
              <label className="pseudo-input-restaurant">
                <span className="pseudo-search-text" >Find</span>
                <span>
                  <input type='text' name='foodType' placeholder="dinner" onChange={this.handleFoodChange.bind(this)}/>
                </span>
              </label>
              <label className="pseudo-input-event">
                  <span className="pseudo-search-text" >&</span>
                  <span>
                    <input type='text' name='eventType' placeholder="concert" onChange={this.handleChange.bind(this)}/>
                  </span>
              </label>
            </div>

            <div className="form-row location-and-date">
              <label className="pseudo-input-location">
                <span className="pseudo-search-text">Near</span>
                <span>
                  <LocationSearchInput className="location-input" onChange={this.handleLocationChange.bind(this)}/>
                </span>
              </label>
              <label className="pseudo-input-date">
                <span className="pseudo-search-text">On</span>
                <span>
                  <DatePicker className="date-input" selected={this.state.params.date} onChange={this.handleDateChange.bind(this)}/>
                </span>
              </label>
            </div>
          </div>

          <button type='submit' id='search' onClick={(e) => this.handleClickSearch(e)}><Link to="/">Search</Link></button>

          <h1>{!!this.state.message && this.state.message}</h1>

        </form>
    )
  }
}

export default connect(null, {searchRestaurants, searchEvents})(SearchForm)
