import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'

const Restaurant = (props) => {
  // console.log("Restaurant props: ", props)
  const { name, categories, display_phone, location, price, rating, review_count, url, coordinates, image_url } = props.restaurant

  return (
    <li onClick={() => props.selectRestaurant(props.restaurant)}>
      <ul>
        <li>{name}</li>
        <li>{categories.map(c => c.title).join(', ')}</li>
        <li>{display_phone}</li>
        <li>{location.display_address.join(', ')}</li>
        <li>{price}</li>
        <li>{rating}</li>
        <li>{review_count}</li>
        <li>{url}</li>
        <li>{image_url}</li>
      </ul>
    </li>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {selectRestaurant} )(Restaurant)
