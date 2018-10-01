import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'
import '../assets/css/Restaurant.css'

const Restaurant = (props) => {
  // console.log("Restaurant.coordinates: ", props.restaurant.coordinates)
  if (props.restaurant) {
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
      <li className="restaurant" onClick={() => props.selectRestaurant(props.restaurant)}>
        <h4 className="rest-data">{name}</h4>
        <img className="rest-img" src={image_url} alt="text" />
          <div className="rest-data">{categories.map(c => c.title).join(', ')}<br/>
            {display_phone}<br/>
            {location.display_address.join(', ')}<br/>
            {price}<br/>
            {rating}<br/>
            {review_count}<br/>
            <a href={url} target="_blank">view on Yelp</a>
          </div>
      </li>
    )
  } else {
    return (
      <li onClick={e => console.log(e.target)}>
        Empty Restaurant
      </li>
    )
  }

}

const mapStateToProps = (state) => {
  return state.search
}

export default connect(mapStateToProps, {selectRestaurant} )(Restaurant)
