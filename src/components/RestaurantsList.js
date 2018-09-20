import React from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';


const RestaurantsList = (props) => {
  console.log("from RestaurantsList - props:", props)
  return (
    <div>
      <h1>Hello from RestaurantsList</h1>
      <Restaurant />
    </div>
  )

}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(RestaurantsList)
