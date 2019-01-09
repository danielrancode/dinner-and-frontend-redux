import React, { Component, Fragment } from 'react';
import { connect } from  'react-redux'
import { shuffle, searchRestaurants, searchEvents } from '../actions.js'
import locationData from './locationData.js'
import DatePicker from 'react-datepicker'
import LocationSearchInput from './LocationSearchInput.js'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import '../assets/css/SearchForm.css'




class SearchForm extends Component {
  state = {
    // locationLib: locationData,
    // display: 'full',
    // type: '',
    message: '',
    params: {
      foodType: 'dinner',
      eventType: 'concert',
      // zipcode: '10019',
      // within: '',
      lat: 40.7687,
      lon: -73.9918,
      date: moment(),
      dateParam: this.formatDate(moment()),
      // time: {},
    },
  }

  // lattitudeOfZipCode(zipcode) {
  //   let i = this.state.locationLib.find(e => e.zip === zipcode)
  //   return (i ? i.lat : 0)
  // }
  //
  // longitudeOfZipCode(zipcode) {
  //   let i = this.state.locationLib.find(e => e.zip === zipcode)
  //   return (i ? i.lon : 0)
  // }

  formatDate(date) {
    let yyyy = date._d.getFullYear().toString()
    let mm = (date._d.getMonth() + 1).toString().length === 2 ? (date._d.getMonth() + 1).toString() : `0${date._d.getMonth() + 1}`
    let dd = date._d.getDate().toString().length === 2 ? date._d.getDate().toString() : `0${date._d.getDate()}`
    return `${yyyy}-${mm}-${dd}`
  }

  handleChange(e) {
    // if (e.target.name === 'zipcode' && e.target.value !== this.state.params.zipcode && e.target.value.length === 5) {
    //   let zip = e.target.value
    //   let lat = this.lattitudeOfZipCode(zip)
    //   let lon = this.longitudeOfZipCode(zip)
    //   if (lat && lon ) {
    //     this.setState({params: {...this.state.params, zipcode: zip, lat: lat, lon: lon }})
    //   } else {
    //     this.setState({params: {...this.state.params, zipcode: zip, lat: null, lon: null }})
    //   }
    // } else {
      this.setState({params: {...this.state.params, [e.target.name]: e.target.value }})
    // }
  }

  handleDateChange(date) {
    this.setState({params: {...this.state.params, date: date, dateParam: this.formatDate(date) }})
  }

  handleLocationChange(latLng) {
    this.setState({params: {...this.state.params, lat: latLng.lat, lon: latLng.lng}})
  }

  handleClickSearch(e) {
    e.preventDefault()
    let p = this.state.params
    if (!!p.foodType && !!p.eventType && !!p.lat && !!p.lon) {
      this.setState({message: ''})
      this.props.searchRestaurants(this.state)
      this.props.searchEvents(this.state)
    } else {
      this.setState({message: 'invalid search params'})
    }

    console.log("window.location.pathname !== '/':", window.location.pathname !== '/')
  }

  render() {
    let params = this.state.params
    // const url=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}&libraries=places`
    // console.log("url", url)
    // console.log("SearchForm params:", params)

    return (
        <form className="search-form">
          <div className="search-form-main">
            <div className="form-row restaurant-and-event">
              <label className="pseudo-input-restaurant">
                <span className="pseudo-search-text" >Find</span>
                <span>
                  <input type='text' name='foodType' placeholder="dinner" onChange={this.handleChange.bind(this)}/>
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

          <button type='submit' id='search' onClick={(e) => this.handleClickSearch(e)}>Search</button>

          <h1>{!!this.state.message && this.state.message}</h1>

        </form>
    )
  }
}

export default connect(null, {shuffle, searchRestaurants, searchEvents})(SearchForm)
