import React, { Component, Fragment } from 'react';
import { connect } from  'react-redux'
import { shuffle, searchRestaurants, searchEvents } from '../actions.js'
import locationData from './locationData.js'

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
      lat: null,
      lon: null,
      date: {},
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

  handleChange = (e) => {
    console.log(this.state.params)
    this.setState({params: {...this.state.params, [e.target.name]: e.target.value }})
    if (e.target.name === 'zipcode' && e.target.value !== this.state.params.zipcode && e.target.value.length == 5) {
      let zip = e.target.value
      let lat = this.lattitudeOfZipCode(zip)
      let lon = this.longitudeOfZipCode(zip)
      if (lat && lon ) {
        this.setState({params: {...this.state.params, zipcode: zip, lat: lat, lon: lon }})
      } else {
        this.setState({params: {...this.state.params, lat: null, lon: null }})
      }
    }
  }

  handleClickSearch = (e) => {
    // this.setState({type: 'search', display: 'top'})
    let p = this.state.params
    if (!!p.foodType && !!p.eventType && !!p.lat && !!p.lon && p.zipcode.length == 5) {
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

    return (
      <Fragment>
        <form className={this.state.display}>
          <label>foodType: <input type='text' name='foodType' value={params.foodType} onChange={this.handleChange}/></label>
          <label>eventType: <input type='text' name='eventType' value={params.eventType} onChange={this.handleChange}/></label>
          <label>Zipcode: <input type='text' name='zipcode' value={params.zipcode} onChange={this.handleChange.bind(this)}/></label>
          <input type='button' value='search' onClick={() => this.handleClickSearch()}/>
          <input type='button' value='shuffle' onClick={() => this.handleClickShuffle()} hidden/>
        </form>
        <h1>{this.state.message}</h1>
      </Fragment>
    )
  }
}

export default connect(null, {shuffle, searchRestaurants, searchEvents})(SearchForm)
