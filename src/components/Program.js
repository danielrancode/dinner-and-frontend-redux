import React, { Fragment } from 'react';
import { connect } from  'react-redux'
import { deleteProgram, fetchPrograms } from '../actions'
import Restaurant from './Restaurant'
import Event from './Event'

const Program = ({ program, deleteProgram }) => {
  let restaurant = JSON.parse(program.restaurant.json_data)
  let event = JSON.parse(program.event.json_data)

  // const handleClick = (e) => {
  //   deleteProgram(program)
  //   fetchPrograms(program.user_id)
  // }

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
      <button onClick={() => deleteProgram(program)}>Delete</button>
    </Fragment>
  )
}

export default connect(s => s.program, {deleteProgram, fetchPrograms})(Program)
