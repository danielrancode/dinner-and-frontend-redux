import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from  'react-redux'
import { searchRestaurants, searchEvents } from '../actions.js'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
// import '../assets/css/SearchForm.css'
import DatePicker from 'react-datepicker'
import LocationSearchInput from './LocationSearchInput.js'

import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';



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
        <Fragment>
                  <TextField
                    variant='outlined'
                    InputProps={{ startAdornment: <InputAdornment position="start">Find</InputAdornment>, }}
                    name='foodType' placeholder="dinner" onChange={this.handleChange.bind(this)}
                  />
                  <TextField
                    variant='outlined'
                    InputProps={{ startAdornment: <InputAdornment position="start">&</InputAdornment>, }}
                    name='eventType' placeholder="concert" onChange={this.handleChange.bind(this)}
                  />

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

          <button type='submit' id='search' onClick={(e) => this.handleClickSearch(e)}><Link to="/">Search</Link></button>

          <h1>{!!this.state.message && this.state.message}</h1>

        </Fragment>
    )
  }
}

export default connect(null, {searchRestaurants, searchEvents})(SearchForm)
