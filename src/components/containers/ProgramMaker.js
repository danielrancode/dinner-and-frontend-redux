import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../SearchForm';
import RestaurantsList from '../RestaurantsList';
import EventsList from '../EventsList';
import MiniProgramsList from '../MiniProgramsList';
import MapContainer from './MapContainer';
// import MapContainer2 from './MapContainer2';
import MyMapComponent from '../MyMapComponent'
import { connect } from  'react-redux'
import { createProgram } from '../../actions.js'
import withAuth from '../hoc/withAuth'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



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
      <h1>{props.program.message}</h1>
      <RestaurantsList />
      <EventsList />
      <MyMapComponent />
      <MiniProgramsList />
      {props.user.loggedIn ? <button onClick={e => handleClick(e)}>Save Program</button> : <Link to="/login"><button>Save Program</button></Link>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default withAuth(connect(mapStateToProps, { createProgram })(ProgramMaker))
