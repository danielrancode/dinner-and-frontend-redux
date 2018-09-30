import React, { Component } from 'react'
import MyMapComponent from './MyMapComponent'
import { connect } from 'react-redux'

const MyMap = ({restaurant, event}) => {


  // state = {restaurant: this.props.restaurant, event: this.props.event}

  const center = () => {
    // let restaurant = this.props.restaurant
    // let event = this.props.event
    if (!!restaurant && !event) {
      return { lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude }
    } else if (!!(restaurant && event)) {
      return { lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude }
    } else if (!!event && !restaurant) {
      return {lat: event.venue.location.lat, lng: event.venue.location.lon}
    } else {
      return { lat: 40.7128, lng: -74.0060 }
    }
  }

  // componentDidMount() {
  //   console.log("hit componentDidMount")
  //   this.setState({restaurant: this.props.restaurant, event: this.props.event})
  // }

    return (<MyMapComponent
              restaurant={restaurant}
              event={event}
              center={center()}
            />)
}



const mapStateToProps = (state) => {
// console.log("mapStateToProps, state.search.currentRestaurant", state.search.currentRestaurant, "state.search.currentEvent", state.search.currentEvent)
  return {restaurant: state.search.currentRestaurant, event: state.search.currentEvent}
}


export default connect(mapStateToProps)(MyMap)
