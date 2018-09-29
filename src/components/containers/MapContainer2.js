// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
//
//
// const MapContainer2 = ({ restaurant, event, google }) => {
//
//  const directionsDisplay = new google.maps.DirectionsRenderer()
//  const directionsService = new google.maps.DirecionsService()
//
//  const a = new google.maps.LatLng(27, 85)
//  const b = new google.maps.LatLng(28, 86)
//
//
//   return (
//     <Map
//       style={{width: "400px", height: "400px", position: "absolute"}}
//       google={google}
//       zoom={10}
//       initialCenter={{lat: event.venue.location.lat, lng: event.venue.location.lon}}>
//
//       <Marker position={
//                 {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
//                 } onClick={this.onMarkerClick}
//               title={restaurant.name} />
//
//       <Marker position={
//                 {lat: event.venue.location.lat, lng: event.venue.location.lon}
//                 } onClick={this.onMarkerClick}
//               title={event.title} />
//
//     </Map>
//   )
// }
//
// const mapStateToProps = (state) => {
//   return ({restaurant: state.search.currentRestaurant, event: state.search.currentEvent})
// }
//
// export default connect(mapStateToProps)(GoogleApiWrapper({
//   apiKey: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`
// })(MapContainer2))
