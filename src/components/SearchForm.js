import React, { Component, Fragment } from 'react';
import { connect } from  'react-redux'
import { shuffle, searchRestaurants, searchEvents } from '../actions.js'
import locationData from './locationData.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import '../assets/css/SearchForm.css'


class SearchForm extends Component {
  state = {
    locationLib: locationData,
    display: 'full',
    // type: '',
    message: '',
    params: {
      foodType: '',
      eventType: '',
      zipcode: '',
      within: '',
      lat: null,
      lon: null,
      date: moment(),
      dateParam: this.formatDate(moment()),
      time: {},
    },
  }

  lattitudeOfZipCode(zipcode) {
    let i = this.state.locationLib.find(e => e.zip === zipcode)
    return (i ? i.lat : 0)
  }

  longitudeOfZipCode(zipcode) {
    let i = this.state.locationLib.find(e => e.zip === zipcode)
    return (i ? i.lon : 0)
  }

  formatDate(date) {
    let yyyy = date._d.getFullYear().toString()
    let mm = (date._d.getMonth() + 1).toString().length === 2 ? (date._d.getMonth() + 1).toString() : `0${date._d.getMonth() + 1}`
    let dd = date._d.getDate().toString().length === 2 ? date._d.getDate().toString() : `0${date._d.getDate()}`
    return `${yyyy}-${mm}-${dd}`
  }

  handleChange(e) {
    if (e.target.name === 'zipcode' && e.target.value !== this.state.params.zipcode && e.target.value.length === 5) {
      let zip = e.target.value
      let lat = this.lattitudeOfZipCode(zip)
      let lon = this.longitudeOfZipCode(zip)
      if (lat && lon ) {
        this.setState({params: {...this.state.params, zipcode: zip, lat: lat, lon: lon }})
      } else {
        this.setState({params: {...this.state.params, zipcode: zip, lat: null, lon: null }})
      }
    } else {
      this.setState({params: {...this.state.params, [e.target.name]: e.target.value }})
    }
  }

  handleDateChange(date) {
    this.setState({params: {...this.state.params, date: date, dateParam: this.formatDate(date) }})
  }

  handleClickSearch(e) {
    // this.setState({type: 'search', display: 'top'})
    e.preventDefault()
    let p = this.state.params
    if (!!p.foodType && !!p.eventType && !!p.lat && !!p.lon && p.zipcode.length === 5) {
      this.setState({message: ''})
      this.props.searchRestaurants(this.state)
      this.props.searchEvents(this.state)
    } else {
      this.setState({message: 'invalid search params'})
    }
  }

  handleClickShuffle = (e) => {
    // let params = this.state.params
    // this.setState({type: 'shuffle', display: 'top'})
    this.props.searchRestaurants(this.state)
    this.props.searchEvents(this.state)
  }

  render() {
    let params = this.state.params
    console.log(params)

    return (
      <Fragment>
        <form className="search-form">
          <div id="food-and-event">
            <div>
              <input type='text' name='foodType' value={params.foodType} onChange={this.handleChange.bind(this)}/>
            </div>
            <div>&</div>
            <div>
              <input type='text' name='eventType' value={params.eventType} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div id="location">
          <div>within</div>
            <div>
              <input type='text' name='within' value={params.within} onChange={this.handleChange.bind(this)}/>
            </div>
            <div>miles from</div>
            <div>
              <input type='text' name='zipcode' value={params.zipcode} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div id="time">
          <div>on</div>
            <div>
              <DatePicker selected={this.state.params.date} onChange={this.handleDateChange.bind(this)}/>
            </div>
            <div>at</div>
            <div>
            <DatePicker selected={this.state.params.date} onChange={this.handleDateChange.bind(this)}/>
            </div>
          </div>
          <div id="buttons">
            <div>
              <button type='submit' id='search' onClick={(e) => this.handleClickSearch(e)}>Search</button>
            </div>
          </div>
        </form>
        <h1>{this.state.message}</h1>
      </Fragment>
    )
  }
}

export default connect(null, {shuffle, searchRestaurants, searchEvents})(SearchForm)
