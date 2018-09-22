import React from 'react';
import Restaurant from './Restaurant'
import Event from './Event'
import { connect } from  'react-redux'


const Program = ({ program }) => {
  let restaurant = JSON.parse(program.restaurant.json_data)
  let event = JSON.parse(program.event.json_data)
  return (
    <div>
      <h3>Restaurant:</h3>
      <ul>
        <Restaurant key={restaurant.id} restaurant={restaurant}/>
      </ul>
      <h3>Event:</h3>
      <ul>
        <Event key={event.id} event={event} />
      </ul>
    </div>
  )
}

export default Program
