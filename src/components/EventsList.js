import React from 'react';
import { connect } from 'react-redux'

import Event from './Event';

const EventsList = ({ events, currentEvent }) => {
    return (
      <div className="events-list" >
        <ul>
          {events.map(e =>
            (currentEvent && e.id === currentEvent.id) ?
              <Event key={e.id} event={e} selected={true}/>
            :
              <Event key={e.id} event={e} selected={false}/>
          )}
        </ul>
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {events: state.search.eventsResults, currentEvent: state.search.currentEvent}
}

export default connect(mapStateToProps)(EventsList)
