import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'

const Restaurant = (props) => {
  // console.log("Restaurant props: ", props)
  const {
    name,
    categories,
    display_phone,
    location,
    price,
    rating,
    review_count,
    url,
    image_url
  } = props.restaurant

  return (
    <li onClick={() => props.selectRestaurant(props.restaurant)}>
      <ul>
        <li><h3>{name}</h3></li>
        <img src={image_url} style={{width: 200}}/>
        <li>{categories.map(c => c.title).join(', ')}</li>
        <li>{display_phone}</li>
        <li>{location.display_address.join(', ')}</li>
        <li>{price}</li>
        <li>{rating}</li>
        <li>{review_count}</li>
        <li>{url}</li>
      </ul>
    </li>
  )
}

const mapStateToProps = (state) => {
  return state.search
}

export default connect(mapStateToProps, {selectRestaurant} )(Restaurant)
