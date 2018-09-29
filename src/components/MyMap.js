import React, { Component } from 'react'
import MyMapComponent from './MyMapComponent'
import { connect } from 'react-redux'

class MyMap extends Component {

  state = {
    restaurant: this.props.restaurant,
    event: this.props.event
  }

  render() {
    return <MyMapComponent restaurant={this.state.restaurant} event={this.state.event} />
  }
}


const mapStateToProps = (state) => {
  return {restaurant: state.search.currentRestaurant, event: state.search.currentEvent}
}

export default connect(mapStateToProps)(MyMap)
