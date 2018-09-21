import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'

const Restaurant = (props) => {
  // console.log("Restaurant props: ", props)
  const { name, alias } = props.restaurant

  return (
    <li onClick={() => props.selectRestaurant(props.restaurant)}>
      {name}, {alias}
    </li>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {selectRestaurant} )(Restaurant)
