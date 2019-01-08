import React from 'react';
import { Link } from 'react-router-dom'
import RestaurantsList from '../RestaurantsList';
import Restaurant from '../Restaurant';
import EventsList from '../EventsList';
import Event from '../Event';
import MiniProgramsList from '../MiniProgramsList';
import LogIn from './LogIn'
import MyMap from '../MyMap'
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'
import withAuth from '../hoc/withAuth'
import '../../assets/css/ProgramMaker.css'



const ProgramMaker = ({
    restaurantsResults,
    eventsResults,
    currentEvent,
    currentRestaurant, currentUser, createProgram}) => {

  const handleClick = (e) => {
      createProgram(currentUser.id, {
        restaurant_data: JSON.stringify(currentRestaurant),
        event_data: JSON.stringify(currentEvent)
      })
    }

  return (

    <div className="program-maker">
      {(restaurantsResults.length > 0 || eventsResults.length > 0) && <div className="results-wrapper">
        <div className="rest-container">
          {restaurantsResults.length > 0 && <RestaurantsList/>}
        </div>
        <div className="event-container">
          {eventsResults.length > 0 && <EventsList />}
        </div>
        <div className="map-container">
          <MyMap
            restaurant={currentRestaurant ? currentRestaurant : null}
            event={currentEvent ? currentEvent : null}
            />
        </div>
      </div>}

      {currentRestaurant && currentEvent && currentUser.id && <button onClick={e => handleClick(e)}>Save Program</button>}
      {currentRestaurant && currentEvent && !currentUser.id && <Link to="/login"><button>Save Program</button></Link>}
      {/*<MiniProgramsList />*/}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.search, currentUser: state.user.currentUser}
}

export default connect(mapStateToProps, { createProgram })(ProgramMaker)
