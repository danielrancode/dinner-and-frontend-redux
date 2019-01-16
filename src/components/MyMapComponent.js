/*global google*/

import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'

const mapEnvironment = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      if (this.props.restaurant && this.props.event) {
        const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: { lat: this.props.restaurant.coordinates.latitude, lng: this.props.restaurant.coordinates.longitude },
            destination: {lat: this.props.event.venue.location.lat, lng: this.props.event.venue.location.lon},
            travelMode: google.maps.TravelMode.WALKING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
      }
    },

    componentDidUpdate() {
      if (this.props.restaurant && this.props.event) {
        const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: { lat: this.props.restaurant.coordinates.latitude, lng: this.props.restaurant.coordinates.longitude },
            destination: {lat: this.props.event.venue.location.lat, lng: this.props.event.venue.location.lon},
            travelMode: google.maps.TravelMode.WALKING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions, result = ${result}`);
            }
          });
      }
    }

  })
)

const mapLayout = props => (
      <GoogleMap className="my-map" defaultZoom={14} center={props.center}>
        {props.directions && <DirectionsRenderer directions={props.directions} />}
        {props.restaurant && <Marker position={{ lat: props.restaurant.coordinates.latitude, lng: props.restaurant.coordinates.longitude}} />}
        {props.event && <Marker position={{lat: props.event.venue.location.lat, lng: props.event.venue.location.lon}} />}
      </GoogleMap>
  )

const MyMapComponent = mapEnvironment(mapLayout)

export default MyMapComponent
