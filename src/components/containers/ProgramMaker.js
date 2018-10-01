import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';
import RestaurantsList from '../RestaurantsList';
import Restaurant from '../Restaurant';
import EventsList from '../EventsList';
import Event from '../Event';
import MiniProgramsList from '../MiniProgramsList';
import MyMapComponent from '../MyMapComponent'
import MyMap from '../MyMap'
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'
import withAuth from '../hoc/withAuth'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
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
      <SearchForm />
      <div className="results-wrapper">
        {restaurantsResults.length > 0 && !currentRestaurant && <RestaurantsList/>}
        {currentRestaurant && <Restaurant key={currentRestaurant.id} restaurant={currentRestaurant}/>}
        {eventsResults.length > 0 && !currentEvent && <EventsList />}
        {currentEvent && <Event key={currentEvent.id} event={currentEvent} />}
        {currentRestaurant && currentEvent && <MyMap />}
        {!(currentRestaurant && currentEvent) && <div className="my-map"></div>}
      </div>
      {currentRestaurant && currentEvent && <button onClick={e => handleClick(e)}>Save Program</button>}
      <MiniProgramsList />

    </div>
  )
}

const mapStateToProps = (state) => {
  return {...state.search, currentUSer: state.user.currentUser}
}

export default withAuth(connect(mapStateToProps, { createProgram })(ProgramMaker))
