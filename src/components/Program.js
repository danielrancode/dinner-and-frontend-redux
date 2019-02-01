import React, { Fragment } from 'react';
import { connect } from  'react-redux'
import { deleteProgram, fetchPrograms } from '../actions'
import Restaurant from './Restaurant'
import Event from './Event'
import '../assets/css/Program.css'
import ampersand from '../assets/logoAmp.png'
import deleteIcon from '../assets/delete-icon.png'



const Program = ({ program, deleteProgram }) => {
  let restaurant = JSON.parse(program.restaurant.json_data)
  let event = JSON.parse(program.event.json_data)

  return (
    <div className="program">
        <Restaurant key={restaurant ? restaurant.id : null} restaurant={restaurant}/>
        <div id="ampersand">
          <img src={ampersand}/>
        </div>
        <Event key={event ? event.id : null} event={event} />
        <div id="delete">
          <button onClick={() => deleteProgram(program)}><img src={deleteIcon}/></button>
        </div>
    </div>
  )
}

export default connect(s => s.program, {deleteProgram, fetchPrograms})(Program)
