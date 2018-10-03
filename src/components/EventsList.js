import React from 'react';
import { connect } from 'react-redux'
import Event from './Event';

const EventsList = ({ events, currentEvent }) => {
  if (currentEvent) {
    return (
      <div className="events-list" >
        <ul>
          <Event key={currentEvent.id} event={currentEvent} />
        </ul>
      </div>
    )
  } else {
    return (
      <div className="events-list" >
        <ul>
          {events.map(e => <Event key={e.id} event={e}/>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {events: state.search.eventsResults, currentEvent: state.search.currentEvent}
}

export default connect(mapStateToProps)(EventsList)
