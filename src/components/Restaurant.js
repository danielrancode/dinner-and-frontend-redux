import React from 'react';
import { connect } from 'react-redux'

const Restaurant = (props) => {
  console.log("from Restaurant.js", props)
  return (
    <div>
      <h1>Hello from Restaurant</h1>
    </div>
  )

}
const mapStateToProps = (state) => {
  return state.restaurantsResults[0]
}

export default connect(mapStateToProps)(Restaurant)
