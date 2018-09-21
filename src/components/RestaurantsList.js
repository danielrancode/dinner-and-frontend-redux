// TODO: change RestaurantsList to RestaurantList

import React from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';

const RestaurantsList = ({ restaurants }) => {
  console.log("from RestaurantsList - props:", restaurants)
  return (
    <ul>
      {restaurants.map(r => <Restaurant key={r.id} restaurant={r}/>)}
    </ul>
  )

}
const mapStateToProps = (state) => {
  console.log("currentRestaurant: ", state.currentRestaurant)
  return {restaurants: state.restaurantsResults}
}

export default connect(mapStateToProps)(RestaurantsList)
