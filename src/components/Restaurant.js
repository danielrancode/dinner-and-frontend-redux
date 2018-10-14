import React from 'react';
import { connect } from  'react-redux'
import { selectRestaurant } from '../actions'
import '../assets/css/Restaurant.css'
import { compose, withState, withHandlers } from 'recompose'

const Restaurant = (props) => {
  console.log("props.selected", props.selected)
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
      <div className={props.selected ? "selected" : "unselected"}>
        <div className="restaurant" onClick={props.handleClick}>
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

const mapStateToProps = (state) => {
  return state.search
}

const enhance = compose(
  withState('selected', 'setSelected', false),
  withHandlers({
    handleClick: props => event => props.setSelected(!props.selected)
  })
)

export default connect(mapStateToProps, {selectRestaurant} )(enhance(Restaurant))
