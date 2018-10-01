import React from 'react';
import { connect } from  'react-redux'
import { selectEvent } from '../actions'

const Event = (props) => {
  if (props.event) {
    const { performers, title, type, datetime_local, address, extended_address } = props.event

    return (
      <li onClick={() => props.selectEvent(props.event)}>
        <ul>
          <li>{performers.image}</li>
          <li>{title}</li>
          <li>{type}</li>
          <li>{address}</li>
          <li>{extended_address}</li>
          <li>{datetime_local}</li>
        </ul>
      </li>
    )
  } else {
    return (
      <li onClick={e => console.log(e.target)}>
        Empty Event
      </li>
    )
  }

}

const mapStateToProps = (state) => {
  return state.program
}

export default connect(mapStateToProps, {selectEvent} )(Event)
