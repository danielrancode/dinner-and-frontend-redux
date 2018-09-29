import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { connect } from 'react-redux'

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34, lng: 150 }}>
        {props.isMarkerShown && <Marker position={{ lat: 34, lng: 150 }} />}
      </GoogleMap>
    )
  })

const mapStateToProps = (state) => {
  return {restaurant: state.search.currentRestaurant, event: state.search.currentEvent}
}

export default connect(mapStateToProps)(MyMapComponent)
