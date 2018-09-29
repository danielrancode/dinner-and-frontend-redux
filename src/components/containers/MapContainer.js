import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

 const MapContainer = ({ restaurant, event, google }) => {


  if (restaurant && event) {
    let bounds = new google.maps.LatLngBounds()
    let infowindow = new google.maps.InfoWindow();

    let points = [
      {lat: event.venue.location.lat, lng: event.venue.location.lon},
      {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
    ]

    for (let i = 0; i < points.length; i++ ) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(points[i].lat, points[i].lng),
      })

      bounds.extend(marker.position)

    }

    return (
      <Map
        style={{width: "400px", height: "400px", position: "absolute"}}
        google={google}
        zoom={10}
        initialCenter={{lat: event.venue.location.lat, lng: event.venue.location.lon}}
        bounds={bounds}>

        <Marker position={
                  {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
                  } onClick={this.onMarkerClick}
                title={restaurant.name} />

        <Marker position={
                  {lat: event.venue.location.lat, lng: event.venue.location.lon}
                  } onClick={this.onMarkerClick}
                title={event.title} />

        {/*<InfoWindow>
        </InfoWindow>*/}
      </Map>
    )
  } else if (event) {
    let bounds = new google.maps.LatLngBounds()
    let infowindow = new google.maps.InfoWindow();

    let points = [
      {lat: event.venue.location.lat, lng: event.venue.location.lon},
    ]

    for (let i = 0; i < points.length; i++ ) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(points[i].lat, points[i].lng),
      })

      bounds.extend(marker.position)

    }

    return (
      <Map
        style={{width: "400px", height: "400px"}}
        google={google}
        zoom={10}
        initialCenter={{lat: event.venue.location.lat, lng: event.venue.location.lon}}
        bounds={bounds}>

        <Marker position={
                  {lat: event.venue.location.lat, lng: event.venue.location.lon}
                  } onClick={this.onMarkerClick}
                title={event.title} />

        {/*<InfoWindow>
        </InfoWindow>*/}
      </Map>
    )
    } else if (restaurant) {
      let bounds = new google.maps.LatLngBounds()
      let infowindow = new google.maps.InfoWindow();

      let points = [
        {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
      ]

      for (let i = 0; i < points.length; i++ ) {
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(points[i].lat, points[i].lng),
        })

        bounds.extend(marker.position)

      }

      return (
        <Map
          style={{width: "400px", height: "400px"}}
          google={google}
          zoom={14}
          initialCenter={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}}
          bounds={bounds}>

          <Marker position={
                    {lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}
                    } onClick={this.onMarkerClick}
                  title={restaurant.name} />


          {/*<InfoWindow>
          </InfoWindow>*/}
        </Map>
      )
    } else {
      return (
        <h1>NO MAP!!</h1>
      )
    }

    }

  const mapStateToProps = (state) => {
    return ({restaurant: state.search.currentRestaurant, event: state.search.currentEvent})
  }

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`
})(MapContainer))
