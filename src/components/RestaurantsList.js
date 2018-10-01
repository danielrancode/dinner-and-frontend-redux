import React from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';

const RestaurantsList = ({ restaurants, currentRestaurant }) => {
  if (currentRestaurant) {
    return (
      <ul className="restaurants-list" >
        <Restaurant key={currentRestaurant.id} restaurant={currentRestaurant}/>
      </ul>
    )
  } else {
    return (
      <ul className="restaurants-list">
        {restaurants.map(r => <Restaurant key={r.id} restaurant={r}/>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {restaurants: state.search.restaurantsResults, currentRestaurant: state.search.currentRestaurant}
}

export default connect(mapStateToProps)(RestaurantsList)
