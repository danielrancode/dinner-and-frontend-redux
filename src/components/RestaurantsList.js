import React from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant';

const RestaurantsList = ({ restaurants, currentRestaurant }) => {
    return (
      <div className="restaurants-list" >
        <ul>
        {restaurants.map(r =>
          (currentRestaurant && r.id === currentRestaurant.id) ?
            <Restaurant key={r.id} restaurant={r} selected={true}/>
          :
            <Restaurant key={r.id} restaurant={r} selected={false}/>
        )}
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {restaurants: state.search.restaurantsResults, currentRestaurant: state.search.currentRestaurant}
}

export default connect(mapStateToProps)(RestaurantsList)
