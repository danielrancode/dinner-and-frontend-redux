import React from 'react';
import { connect } from 'react-redux'
import Event from './Event';

const EventsList = ({ events, currentEvent }) => {
  if (currentEvent) {
    return (
      <ul>
        <Event key={currentEvent.id} event={currentEvent} />
      </ul>
    )
  } else {
    return (
      <ul>
        {events.map(e => <Event key={e.id} event={e}/>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {events: state.search.eventsResults, currentEvent: state.search.currentEvent}
}

export default connect(mapStateToProps)(EventsList)
