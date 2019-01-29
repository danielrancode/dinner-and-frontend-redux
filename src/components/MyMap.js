import React from 'react'
import { connect } from 'react-redux'
// import '../assets/css/MyMap.css'
import MyMapComponent from './MyMapComponent'

const MyMap = ({restaurant, event}) => {

  const center = () => {
    if (restaurant) {
      return { lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude }
    } else if (event) {
      return { lat: event.venue.location.lat, lng: event.venue.location.lon }
    } else {
      return { lat: 40.7128, lng: -74.0060 }
    }
  }

  return (<div className="my-map">
            <MyMapComponent
              restaurant={restaurant}
              event={event}
              center={center()}
            />
          </div>)
}

const mapStateToProps = (state) => {
  return {restaurant: state.search.currentRestaurant, event: state.search.currentEvent}
}

export default connect(mapStateToProps)(MyMap)
