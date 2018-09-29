import React from 'react'
import MyMapComponent from './MyMapComponent'
import { connect } from 'react-redux'

const MyMap = ({restaurant, event}) => {

  return (
    <MyMapComponent restaurant={restaurant} event={event} />
  )
}

const mapStateToProps = (state) => {
  return {restaurant: state.search.currentRestaurant, event: state.search.currentEvent}
}

export default connect(mapStateToProps)(MyMap)
