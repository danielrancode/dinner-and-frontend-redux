import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';
import RestaurantsList from '../RestaurantsList';
import EventsList from '../EventsList';
// import Map from '../Map';
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'


const ProgramMaker = (props) => {

  const handleClick = (e) => {
      props.createProgram(props.user.currentUser.id, {
        restaurant_data: JSON.stringify(props.search.currentRestaurant),
        event_data: JSON.stringify(props.search.currentEvent)
      })
    }

  return (
    <div>
      <SearchForm />
      <RestaurantsList />
      <EventsList />
      {props.user.loggedIn ? <button onClick={e => handleClick(e)}>Save Program</button> : <Link to="/login"><button>Save Program</button></Link>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { createProgram })(ProgramMaker)
