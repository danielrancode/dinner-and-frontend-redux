import React from 'react'
import { connect } from 'react-redux'
import '../assets/css/ProgramMaker.css'


const RouteMeButton = (props) => {

    let userLat = '40.715964'
    let userLng = '-74.003537'
    let restuarantLat = String(props.currentRestaurantCoords.latitude)
    let restaurantLng = String(props.currentRestaurantCoords.longitude)
    let eventLat = String(props.currentEventCoords.lat)
    let eventLng = String(props.currentEventCoords.lon)
    return (
      <div className="button">
        <form action={`https://www.google.com/maps/dir/${userLat},+${userLng}/${restuarantLat},+${restaurantLng}/${eventLat},+${eventLng}/@37.8899781,-65.2836635,5z/data=!3m1!4b1!4m14!4m13!1m3!2m2!1d-72.0024806!2d40.7178902!1m3!2m2!1d-73.0024806!2d40.7178902!1m3!2m2!1d-71.0024806!2d40.7178902!3e0`} target='blank'>
          <input type="submit" value="Route Me!" />
        </form>
      </div>
    )
}

const mapStateToProps = (state) => {
  console.log('REDUX STATE', state);
  return {
          currentRestaurantCoords: state.search.currentRestaurant.coordinates,
          currentEventCoords: state.search.currentEvent.venue.location
      }
}

export default connect(mapStateToProps)(RouteMeButton)
