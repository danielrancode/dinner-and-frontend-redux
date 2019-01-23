import React, { Fragment } from 'react';
import '../assets/css/YelpSearchInput.css'

export default class YelpSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foodType: '', suggestions: null };
  }

  handleChange = foodType => {
    this.setState({ foodType });
  };

  handleFoodChange(e) {
    const ROOT = `${process.env.REACT_APP_API_ENDPOINT}/api/v1`
      this.setState(
        {params: {...this.state, [e.target.name]: e.target.value }},
        () => {
          let params = this.state.params
          fetch(`${ROOT}/restaurants/autocomplete?text=${params.foodType}&latitude=${params.lat}&longitude=${params.lon}`,
          { method: 'GET',
            headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` }
          })
        .then(res => res.json())
        .then(data => this.setState({...this.state, suggestions: data}))
      }
      )
  }


  render() {
    return (
      <Fragment>
        <input type='text' name='foodType' className="yelp-search-input" placeholder="sushi, pasta, hummus..." onChange={this.handleFoodChange.bind(this)}/>
        <div className="yelp-autocomplete-dropdown-container">
          {this.state.suggestions &&
              <div>
                <span className="matching-substring">
                FIRST
                {/*suggestion.description.slice(0, this.state.address.length)*/}
                </span>
                <span>
                SECOND
                {/*suggestion.description.slice(this.state.address.length)*/}
                </span>
              </div>
            }
        </div>
      </Fragment>
    );
  }
}
