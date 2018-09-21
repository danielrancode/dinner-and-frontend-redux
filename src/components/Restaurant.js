import React from 'react';
import { connect } from  'react-redux'

const Restaurant = (props) => {
  console.log(props)
  const { name, alias } = props.restaurant

  const handleClick = () => {
    props.dispatch({
      type: 'SELECT_RESTAURANT',
      payload: props.restaurant
    })
  }

  return (
    <li onClick={handleClick}>
      {name}, {alias}
    </li>
  )
}

function mapDispatchToProps() {
  return {}
}

export default connect()(Restaurant)
