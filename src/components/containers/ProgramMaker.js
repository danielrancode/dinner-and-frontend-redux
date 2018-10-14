import React from 'react';
import RestaurantsList from '../RestaurantsList';
import Restaurant from '../Restaurant';
import EventsList from '../EventsList';
import Event from '../Event';
import MiniProgramsList from '../MiniProgramsList';
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
          {restaurantsResults.length > 0 && !currentRestaurant && <RestaurantsList/>}
          {currentRestaurant && <Restaurant key={currentRestaurant.id} restaurant={currentRestaurant}/>}
        </div>
        <div className="event-container">
          {eventsResults.length > 0 && !currentEvent && <EventsList />}
          {currentEvent && <Event key={currentEvent.id} event={currentEvent} />}
        </div>
        <div className="map=container">
          {currentRestaurant && currentEvent && <MyMap />}
          {!(currentRestaurant && currentEvent) && <div className="my-map"></div>}
        </div>
      </div>}

      {currentRestaurant && currentEvent && <button onClick={e => handleClick(e)}>Save Program</button>}
      {/*<MiniProgramsList />*/}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.search, currentUser: state.user.currentUser}
}

export default withAuth(connect(mapStateToProps, { createProgram })(ProgramMaker))
