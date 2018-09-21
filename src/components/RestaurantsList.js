import React from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';

const RestaurantsList = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map(r => <Restaurant key={r.id} restaurant={r}/>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log("currentRestaurant: ", state.restaurant.currentRestaurant)
  return {restaurants: state.search.restaurantsResults}
}

export default connect(mapStateToProps)(RestaurantsList)
