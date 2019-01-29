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
import MUIPlacesAutocomplete, { geocodeByPlaceID } from 'mui-places-autocomplete'



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

  onSuggestionSelected(suggestion) {
    geocodeByPlaceID(suggestion.place_id).then((results) => {
      // Add your business logic here. In this case we simply set our state with the coordinates of
      // the selected suggestion...

      // Just use the first result in the list to get the geometry coordinates
      const { geometry } = results[0]

      const coordinates = {
        lat: geometry.location.lat(),
        lon: geometry.location.lng(),
      }

      this.setState( { params: {...this.state.params, lat: coordinates.lat, lon: coordinates.lon }})
    }).catch((err) => {
      // Handle any errors that occurred when we tried to get geospatial data for a selected
      // suggestion...
    })
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
                  <MUIPlacesAutocomplete
                    onSuggestionSelected={this.onSuggestionSelected}
                    renderTarget={() => console.log("state:", this.state)}
                    textFieldProps={{variant: 'outlined', InputProps: { startAdornment: <InputAdornment position="start">near</InputAdornment>, }}}
                    />

            <div className="form-row location-and-date">
                {/*  <LocationSearchInput className="location-input" onChange={this.handleLocationChange.bind(this)}/> */}
                {/* <DatePicker className="date-input" selected={this.state.params.date} onChange={this.handleDateChange.bind(this)}/> */}
            </div>

          <button type='submit' id='search' onClick={(e) => this.handleClickSearch(e)}><Link to="/">Search</Link></button>

          <h1>{!!this.state.message && this.state.message}</h1>

        </Fragment>
    )
  }
}

export default connect(null, {searchRestaurants, searchEvents})(SearchForm)
