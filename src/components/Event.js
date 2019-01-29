import React from 'react';
import { connect } from  'react-redux'
import { selectEvent } from '../actions'
// import '../assets/css/Event.css'


const Event = (props) => {
  if (props.event) {
    const { performers, title, type, datetime_local, address, extended_address } = props.event
    return (
      <div className={props.selected ? "current-event" : "event"} onClick={() => props.selectEvent(props.event)}>
        <h4 className="event-title">{title}</h4>
        {performers[0].image && <img className="event-img" src={performers[0].image}alt="text" />}
        <div className="event-data">
          {type}<br/>
          {address}<br/>
          {extended_address}<br/>
          {datetime_local}
        </div>
      </div>
    )
  } else {
    return (
      <li onClick={e => console.log(e.target)}>
        Empty Event
      </li>
    )
  }

}

export default connect(s => s.program, {selectEvent} )(Event)
