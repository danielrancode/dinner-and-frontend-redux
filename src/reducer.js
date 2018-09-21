const initialState = {
  currentUser: {name: 'daniel', password: "hello!", id: 100},
  userPrograms: [],
  restaurantsResults: [
    {
      "id": "pbvGgOyHHbQppE3R3Wx0tA",
      "alias": "the-atlantic-boat-club-brooklyn",
      "name": "The Atlantic Boat Club",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw",
      "review_count": 20,
      "categories": [
        {
          "alias": "seafood",
          "title": "Seafood"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 40.68025,
        "longitude": -73.96117
      },
      "transactions": [

      ],
      "location": {
        "address1": "990 Atlantic Ave",
        "address2": "",
        "address3": null,
        "city": "Brooklyn",
        "zip_code": "11238",
        "country": "US",
        "state": "NY",
        "display_address": [
          "990 Atlantic Ave",
          "Brooklyn, NY 11238"
        ]
      },
      "phone": "+17186760089",
      "display_phone": "(718) 676-0089",
      "distance": 220.26956997243178
    },
    {
      "id": "UXPZk1P695Hv8ml2QWMV7w",
      "alias": "greedi-vegan-brooklyn-3",
      "name": "Greedi Vegan",
      "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/FSEppg6prqD8L0k6iYwZyw/o.jpg",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/greedi-vegan-brooklyn-3?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw",
      "review_count": 63,
      "categories": [
        {
          "alias": "vegan",
          "title": "Vegan"
        },
        {
          "alias": "vegetarian",
          "title": "Vegetarian"
        }
      ],
      "rating": 4.5,
      "coordinates": {
        "latitude": 40.6763513,
        "longitude": -73.9523247
      },
      "transactions": [
        "pickup"
      ],
      "price": "$$",
      "location": {
        "address1": "1031 Bergen St",
        "address2": null,
        "address3": "",
        "city": "Brooklyn",
        "zip_code": "11216",
        "country": "US",
        "state": "NY",
        "display_address": [
          "1031 Bergen St",
          "Brooklyn, NY 11216"
        ]
      },
      "phone": "+13476277900",
      "display_phone": "(347) 627-7900",
      "distance": 1030.2376815571974
    },
  ],
  eventsResults: [],
  currentProgram: {},
  currentRestaurant: {},
  currentEvent: {},
  currentSearchParams: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SELECT_RESTAURANT':
      return { ...state, currentRestaurant: action.payload }
    default:
    return state;
  }
}
