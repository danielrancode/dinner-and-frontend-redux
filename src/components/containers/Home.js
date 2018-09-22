import React from 'react';
import SearchForm from '../SearchForm';
import RestaurantsList from '../RestaurantsList';
import EventsList from '../EventsList';
// import Map from '../Map';
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'


const Home = (props) => {

  const handleClick = (e) => {
    props.createProgram({
      restaurant_data: JSON.stringify(props.restaurant.currentRestaurant),
      event_data: JSON.stringify(props.event.currentEvent)
    })
  }

  return (
    <div>
      <SearchForm />
      <RestaurantsList />
      <EventsList />
      <button onClick={e => handleClick(e)}>Save Program</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { createProgram })(Home)
