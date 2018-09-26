import React, { Fragment } from 'react';
import Restaurant from './Restaurant'
import Event from './Event'
// import { connect } from  'react-redux'


const Program = ({ program }) => {
  let restaurant = JSON.parse(program.restaurant.json_data)
  let event = JSON.parse(program.event.json_data)
  return (
    <Fragment>
      <h1>Program {program.id}</h1>
      <h3>Restaurant:</h3>
      <ul>
        <Restaurant key={restaurant ? restaurant.id : null} restaurant={restaurant}/>
      </ul>
      <h3>Event:</h3>
      <ul>
        <Event key={event ? event.id : null} event={event} />
      </ul>
    </Fragment>
  )
}

export default Program
