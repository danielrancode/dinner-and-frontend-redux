import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'
import '../assets/css/Restaurant.css'

const Restaurant = ({restaurant, selected, selectRestaurant}) => {
  if (restaurant) {
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
    } = restaurant

    return (
        <div className={selected ? "current-restaurant" : "restaurant"} onClick={() => selectRestaurant(restaurant)}>
          <h4 className="rest-name">{name}</h4>
          <img className="rest-img" src={image_url} alt="text" />
            <div className="rest-data">{categories.map(c => c.title).join(', ')}<br/>
              {display_phone}<br/>
              {location.display_address.join(', ')}<br/>
              {price}<br/>
              {rating}<br/>
              {review_count}<br/>
              <a href={url} target="_blank">view on Yelp</a>
            </div>
        </div>
    )
  } else {
    return (
      <li onClick={e => console.log(e.target)}>
        Empty Restaurant
      </li>
    )
  }

}

export default connect(s => s.search, {selectRestaurant} )(Restaurant)
