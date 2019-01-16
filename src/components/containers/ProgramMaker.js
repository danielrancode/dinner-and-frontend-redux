import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import RestaurantsList from '../RestaurantsList';
import EventsList from '../EventsList';
import MyMap from '../MyMap'
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'
import withAuth from '../hoc/withAuth'
import '../../assets/css/ProgramMaker.css'
import yelpLogo from '../../assets/yelp_fullcolor_outline.png'




const ProgramMaker = ({
    restaurantsResults,
    eventsResults,
    currentEvent,
    currentRestaurant, currentUser, createProgram, message}) => {

  const handleClick = (e) => {
      createProgram(currentUser.id, {
        restaurant_data: JSON.stringify(currentRestaurant),
        event_data: JSON.stringify(currentEvent)
      })
    }

  return (
    <Fragment>
      <div className="program-maker">
        {(restaurantsResults.length > 0 || eventsResults.length > 0) && <div className="results-wrapper">
          <div className="rest-container">
          {/* <img id="yelp-logo" src={ yelpLogo } /> */}

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
      </div>
      {currentRestaurant && currentEvent && currentUser.id && <button className="save-program" onClick={e => handleClick(e)}>Save Program</button>}
      {currentRestaurant && currentEvent && !currentUser.id && <Link to="/login"><button className="save-program">Save Program</button></Link>}

      <h3 style={{color:"green"}}>{ message }</h3>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {...state.search, currentUser: state.user.currentUser, message: state.program.message}
}

export default withAuth(connect(mapStateToProps, { createProgram })(ProgramMaker))
