import React from 'react';
import { connect } from  'react-redux'
import { selectEvent } from '../actions'

const Event = (props) => {
  const { performers, title, type, datetime, address, extended_address } = props.event

  return (
    <li onClick={() => props.selectEvent(props.event)}>
      <ul>
        <li>{performers.image}</li>
        <li>{title}</li>
        <li>{type}</li>
        <li>{address}</li>
        <li>{extended_address}</li>
        <li>{datetime}</li>
      </ul>
    </li>
  )
}

const mapStateToProps = (state) => {
  return state.program
}

export default connect(mapStateToProps, {selectEvent} )(Event)
