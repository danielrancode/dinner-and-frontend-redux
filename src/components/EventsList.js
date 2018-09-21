import React from 'react';
import { connect } from 'react-redux'
import Event from './Event';

const EventsList = ({ events }) => {
  console.log("from EventsList - props:", events)
  return (
    <ul>
      {events.map(e => <Event key={e.id} event={e}/>)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log("currentEvent: ", state.event.currentEvent)
  return {events: state.search.eventsResults}
}

export default connect(mapStateToProps)(EventsList)
