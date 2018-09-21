import React from 'react';
import { connect } from 'react-redux'
import Event from './Event';

const EventsList = ({ events }) => {
  debugger
  console.log("from EventsList - props:", events)
  return (
    <ul>
      {events.map(e => <Event key={e.id} event={e}/>)}
    </ul>
  )

}
const mapStateToProps = (state) => {
  console.log("currentEvent: ", state.currentEvent)
  return {events: state.eventsResults}
}

export default connect(mapStateToProps)(EventsList)
