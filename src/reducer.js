// import locationData from './assets/locationData.js'
import { combineReducers } from 'redux'

// const initialState = {
//   currentUser: {name: 'daniel', password: "hello!", id: 100},
//   userPrograms: [],
//   restaurantsResults: [],
//   eventsResults: [],
//   currentProgram: {},
//   currentRestaurant: {},
//   currentEvent: {},
//   currentSearchParams: {},
//   loadingEvents: false,
//   loadingRestaurants: false,
// }

const initialUserState = {
  currentUser: {name: 'daniel', password: "hello!", id: 100},
}

const initialSearchState = {
  type: '',
  restaurantsResults: [],
  eventsResults: [],
  currentSearchParams: {},
  loadingEvents: false,
  loadingRestaurants: false,
}

const initialEventState = {
  currentEvent: null,
}

const initialRestaurantState = {
  currentRestaurant: null,
}

const initialProgramState = {
  programs: // 20180922124804
// http://localhost:3000/api/v1/programs
[
  {
    "id": 1,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 3,
      "json_data": "{\"id\":\"2cNmmr9yzdnNPppwExt9SQ\",\"categories\":\"Specialty Food, Italian, Food Court\",\"phone\":\"(213) 310-8000\",\"address\":\"10250 Santa Monica Blvd\\nLos Angeles, CA 90067\",\"name\":\"Eataly\",\"price\":\"$$\",\"rating\":3.5,\"review_count\":1344,\"url\":\"https://www.yelp.com/biz/eataly-los-angeles-6?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"coordinates\":{\"latitude\":34.0592198370764,\"longitude\":-118.419729726938},\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/lKFADtm1adpwFUn_VWAxcw/o.jpg\"}",
      "created_at": "2018-09-19T23:29:02.546Z",
      "updated_at": "2018-09-19T23:29:02.546Z"
    },
    "event": {
      "id": 3,
      "json_data": "{\"id\":4454227,\"datetime\":\"2018-09-19T18:30:00\",\"title\":\"The Vamps\",\"type\":\"concert\",\"address\":\"1050 South Hill Street\",\"extended_address\":\"Los Angeles, CA 90015\",\"coordinates\":{\"lat\":34.0403,\"lon\":-118.259},\"venue\":\"The Belasco Theater\",\"url\":\"https://seatgeek.com/the-vamps-tickets/los-angeles-california-the-belasco-theater-2018-09-19-6-30-pm/concert/4454227\"}",
      "created_at": "2018-09-19T23:29:02.549Z",
      "updated_at": "2018-09-19T23:29:02.549Z"
    }
  },
  {
    "id": 2,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 11,
      "json_data": "{\"id\":\"pbvGgOyHHbQppE3R3Wx0tA\",\"alias\":\"the-atlantic-boat-club-brooklyn\",\"name\":\"The Atlantic Boat Club\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":20,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":40.68025,\"longitude\":-73.96117},\"transactions\":[],\"location\":{\"address1\":\"990 Atlantic Ave\",\"address2\":\"\",\"address3\":null,\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"990 Atlantic Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186760089\",\"display_phone\":\"(718) 676-0089\",\"distance\":220.26956997243178}",
      "created_at": "2018-09-22T16:06:31.381Z",
      "updated_at": "2018-09-22T16:06:31.381Z"
    },
    "event": {
      "id": 11,
      "json_data": "{\"datetime_utc\":\"2018-09-22T14:00:00\",\"description\":\"\",\"created_at\":\"2018-08-30T16:10:03\",\"stats\":{\"visible_listing_count\":null,\"median_price\":null,\"dq_bucket_counts\":null,\"listing_count\":null,\"lowest_price\":null,\"lowest_price_good_deals\":null,\"highest_price\":null,\"average_price\":null},\"time_tbd\":false,\"popularity\":0,\"title\":\"Rock Fest\",\"short_title\":\"Rock Fest\",\"performers\":[{\"primary\":true,\"images\":{\"huge\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\"},\"home_venue_id\":null,\"image\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\",\"stats\":{\"event_count\":1},\"popularity\":0,\"divisions\":null,\"location\":null,\"score\":0.41,\"short_name\":\"Rock Fest\",\"name\":\"Rock Fest\",\"id\":7757,\"type\":\"music_festival\",\"taxonomies\":[{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":null,\"name\":\"concerts\",\"id\":2000000},{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"num_upcoming_events\":1,\"has_upcoming_events\":true,\"image_license\":null,\"url\":\"https://seatgeek.com/rock-fest-tickets\",\"colors\":null,\"slug\":\"rock-fest\",\"image_attribution\":null}],\"announce_date\":\"2018-08-30T00:00:00\",\"score\":0.434,\"venue\":{\"display_location\":\"Oceanport, NJ\",\"postal_code\":\"07757\",\"address\":\"175 Oceanport Avenue\",\"timezone\":\"America/New_York\",\"state\":\"NJ\",\"access_method\":null,\"id\":3786,\"location\":{\"lat\":40.3057,\"lon\":-74.0166},\"score\":0.6805245,\"name\":\"Monmouth Park Racetrack\",\"popularity\":0,\"num_upcoming_events\":1,\"links\":[],\"country\":\"US\",\"name_v2\":\"Monmouth Park Racetrack\",\"url\":\"https://seatgeek.com/venues/monmouth-park-racetrack/tickets\",\"metro_code\":501,\"has_upcoming_events\":true,\"extended_address\":\"Oceanport, NJ 07757\",\"city\":\"Oceanport\",\"slug\":\"monmouth-park-racetrack\"},\"id\":4515360,\"type\":\"music_festival\",\"taxonomies\":[{\"parent_id\":null,\"name\":\"concert\",\"id\":2000000},{\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"date_tbd\":false,\"status\":\"normal\",\"links\":[],\"url\":\"https://seatgeek.com/rock-fest-tickets/oceanport-new-jersey-monmouth-park-racetrack-2018-09-22-10-am/music-festival/4515360\",\"access_method\":null,\"visible_until_utc\":\"2018-09-22T18:00:00\",\"is_open\":false,\"datetime_local\":\"2018-09-22T10:00:00\",\"datetime_tbd\":false}",
      "created_at": "2018-09-22T16:06:31.384Z",
      "updated_at": "2018-09-22T16:06:31.384Z"
    }
  },
  {
    "id": 3,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 12,
      "json_data": "{\"id\":\"pbvGgOyHHbQppE3R3Wx0tA\",\"alias\":\"the-atlantic-boat-club-brooklyn\",\"name\":\"The Atlantic Boat Club\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":20,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":40.68025,\"longitude\":-73.96117},\"transactions\":[],\"location\":{\"address1\":\"990 Atlantic Ave\",\"address2\":\"\",\"address3\":null,\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"990 Atlantic Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186760089\",\"display_phone\":\"(718) 676-0089\",\"distance\":220.26956997243178}",
      "created_at": "2018-09-22T16:09:35.852Z",
      "updated_at": "2018-09-22T16:09:35.852Z"
    },
    "event": {
      "id": 12,
      "json_data": "{\"datetime_utc\":\"2018-09-22T14:00:00\",\"description\":\"\",\"created_at\":\"2018-08-30T16:10:03\",\"stats\":{\"visible_listing_count\":null,\"median_price\":null,\"dq_bucket_counts\":null,\"listing_count\":null,\"lowest_price\":null,\"lowest_price_good_deals\":null,\"highest_price\":null,\"average_price\":null},\"time_tbd\":false,\"popularity\":0,\"title\":\"Rock Fest\",\"short_title\":\"Rock Fest\",\"performers\":[{\"primary\":true,\"images\":{\"huge\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\"},\"home_venue_id\":null,\"image\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\",\"stats\":{\"event_count\":1},\"popularity\":0,\"divisions\":null,\"location\":null,\"score\":0.41,\"short_name\":\"Rock Fest\",\"name\":\"Rock Fest\",\"id\":7757,\"type\":\"music_festival\",\"taxonomies\":[{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":null,\"name\":\"concerts\",\"id\":2000000},{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"num_upcoming_events\":1,\"has_upcoming_events\":true,\"image_license\":null,\"url\":\"https://seatgeek.com/rock-fest-tickets\",\"colors\":null,\"slug\":\"rock-fest\",\"image_attribution\":null}],\"announce_date\":\"2018-08-30T00:00:00\",\"score\":0.434,\"venue\":{\"display_location\":\"Oceanport, NJ\",\"postal_code\":\"07757\",\"address\":\"175 Oceanport Avenue\",\"timezone\":\"America/New_York\",\"state\":\"NJ\",\"access_method\":null,\"id\":3786,\"location\":{\"lat\":40.3057,\"lon\":-74.0166},\"score\":0.6805245,\"name\":\"Monmouth Park Racetrack\",\"popularity\":0,\"num_upcoming_events\":1,\"links\":[],\"country\":\"US\",\"name_v2\":\"Monmouth Park Racetrack\",\"url\":\"https://seatgeek.com/venues/monmouth-park-racetrack/tickets\",\"metro_code\":501,\"has_upcoming_events\":true,\"extended_address\":\"Oceanport, NJ 07757\",\"city\":\"Oceanport\",\"slug\":\"monmouth-park-racetrack\"},\"id\":4515360,\"type\":\"music_festival\",\"taxonomies\":[{\"parent_id\":null,\"name\":\"concert\",\"id\":2000000},{\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"date_tbd\":false,\"status\":\"normal\",\"links\":[],\"url\":\"https://seatgeek.com/rock-fest-tickets/oceanport-new-jersey-monmouth-park-racetrack-2018-09-22-10-am/music-festival/4515360\",\"access_method\":null,\"visible_until_utc\":\"2018-09-22T18:00:00\",\"is_open\":false,\"datetime_local\":\"2018-09-22T10:00:00\",\"datetime_tbd\":false}",
      "created_at": "2018-09-22T16:09:35.867Z",
      "updated_at": "2018-09-22T16:09:35.867Z"
    }
  },
  {
    "id": 4,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 13,
      "json_data": "{\"id\":\"l9b8NbDyhKhnjLKtUwlPwQ\",\"alias\":\"olea-brooklyn-2\",\"name\":\"Olea\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/1QHMMY7YIQMoXFszPPoDOA/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/olea-brooklyn-2?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":781,\"categories\":[{\"alias\":\"breakfast_brunch\",\"title\":\"Breakfast & Brunch\"},{\"alias\":\"mediterranean\",\"title\":\"Mediterranean\"},{\"alias\":\"beer_and_wine\",\"title\":\"Beer, Wine & Spirits\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.6877844,\"longitude\":-73.9706046},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"171 Lafayette Ave\",\"address2\":\"\",\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"171 Lafayette Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186437003\",\"display_phone\":\"(718) 643-7003\",\"distance\":1064.0636864212001}",
      "created_at": "2018-09-22T16:12:19.915Z",
      "updated_at": "2018-09-22T16:12:19.915Z"
    },
    "event": {
      "id": 13,
      "json_data": "{\"datetime_utc\":\"2018-09-22T14:00:00\",\"description\":\"\",\"created_at\":\"2018-08-30T16:10:03\",\"stats\":{\"visible_listing_count\":null,\"median_price\":null,\"dq_bucket_counts\":null,\"listing_count\":null,\"lowest_price\":null,\"lowest_price_good_deals\":null,\"highest_price\":null,\"average_price\":null},\"time_tbd\":false,\"popularity\":0,\"title\":\"Rock Fest\",\"short_title\":\"Rock Fest\",\"performers\":[{\"primary\":true,\"images\":{\"huge\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\"},\"home_venue_id\":null,\"image\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\",\"stats\":{\"event_count\":1},\"popularity\":0,\"divisions\":null,\"location\":null,\"score\":0.41,\"short_name\":\"Rock Fest\",\"name\":\"Rock Fest\",\"id\":7757,\"type\":\"music_festival\",\"taxonomies\":[{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":null,\"name\":\"concerts\",\"id\":2000000},{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"num_upcoming_events\":1,\"has_upcoming_events\":true,\"image_license\":null,\"url\":\"https://seatgeek.com/rock-fest-tickets\",\"colors\":null,\"slug\":\"rock-fest\",\"image_attribution\":null}],\"announce_date\":\"2018-08-30T00:00:00\",\"score\":0.434,\"venue\":{\"display_location\":\"Oceanport, NJ\",\"postal_code\":\"07757\",\"address\":\"175 Oceanport Avenue\",\"timezone\":\"America/New_York\",\"state\":\"NJ\",\"access_method\":null,\"id\":3786,\"location\":{\"lat\":40.3057,\"lon\":-74.0166},\"score\":0.6805245,\"name\":\"Monmouth Park Racetrack\",\"popularity\":0,\"num_upcoming_events\":1,\"links\":[],\"country\":\"US\",\"name_v2\":\"Monmouth Park Racetrack\",\"url\":\"https://seatgeek.com/venues/monmouth-park-racetrack/tickets\",\"metro_code\":501,\"has_upcoming_events\":true,\"extended_address\":\"Oceanport, NJ 07757\",\"city\":\"Oceanport\",\"slug\":\"monmouth-park-racetrack\"},\"id\":4515360,\"type\":\"music_festival\",\"taxonomies\":[{\"parent_id\":null,\"name\":\"concert\",\"id\":2000000},{\"parent_id\":2000000,\"name\":\"music_festival\",\"id\":2010000}],\"date_tbd\":false,\"status\":\"normal\",\"links\":[],\"url\":\"https://seatgeek.com/rock-fest-tickets/oceanport-new-jersey-monmouth-park-racetrack-2018-09-22-10-am/music-festival/4515360\",\"access_method\":null,\"visible_until_utc\":\"2018-09-22T18:00:00\",\"is_open\":false,\"datetime_local\":\"2018-09-22T10:00:00\",\"datetime_tbd\":false}",
      "created_at": "2018-09-22T16:12:19.926Z",
      "updated_at": "2018-09-22T16:12:19.926Z"
    }
  },
  {
    "id": 5,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 14,
      "json_data": "{\"id\":\"pbvGgOyHHbQppE3R3Wx0tA\",\"alias\":\"the-atlantic-boat-club-brooklyn\",\"name\":\"The Atlantic Boat Club\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":20,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":40.68025,\"longitude\":-73.96117},\"transactions\":[],\"location\":{\"address1\":\"990 Atlantic Ave\",\"address2\":\"\",\"address3\":null,\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"990 Atlantic Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186760089\",\"display_phone\":\"(718) 676-0089\",\"distance\":220.26956997243178}",
      "created_at": "2018-09-22T16:12:50.023Z",
      "updated_at": "2018-09-22T16:12:50.023Z"
    },
    "event": {
      "id": 14,
      "json_data": "{\"url\":\"https://seatgeek.com/rock-fest-tickets/oceanport-new-jersey-monmouth-park-racetrack-2018-09-22-10-am/music-festival/4515360\",\"description\":\"\",\"links\":[],\"status\":\"normal\",\"venue\":{\"name\":\"Monmouth Park Racetrack\",\"url\":\"https://seatgeek.com/venues/monmouth-park-racetrack/tickets\",\"country\":\"US\",\"location\":{\"lon\":-74.0166,\"lat\":40.3057},\"links\":[],\"extended_address\":\"Oceanport, NJ 07757\",\"address\":\"175 Oceanport Avenue\",\"metro_code\":501,\"city\":\"Oceanport\",\"num_upcoming_events\":1,\"score\":0.6805245,\"has_upcoming_events\":true,\"popularity\":0,\"postal_code\":\"07757\",\"state\":\"NJ\",\"access_method\":null,\"name_v2\":\"Monmouth Park Racetrack\",\"timezone\":\"America/New_York\",\"id\":3786,\"display_location\":\"Oceanport, NJ\",\"slug\":\"monmouth-park-racetrack\"},\"performers\":[{\"name\":\"Rock Fest\",\"url\":\"https://seatgeek.com/rock-fest-tickets\",\"location\":null,\"score\":0.41,\"primary\":true,\"image_license\":null,\"num_upcoming_events\":1,\"images\":{\"huge\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\"},\"short_name\":\"Rock Fest\",\"image\":\"https://chairnerd.global.ssl.fastly.net/images/performers-landscape/rock-fest-b06214/7757/huge.jpg\",\"stats\":{\"event_count\":1},\"has_upcoming_events\":true,\"popularity\":0,\"image_attribution\":null,\"divisions\":null,\"home_venue_id\":null,\"type\":\"music_festival\",\"colors\":null,\"id\":7757,\"taxonomies\":[{\"name\":\"concerts\",\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":null,\"id\":2000000},{\"name\":\"music_festival\",\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":2000000,\"id\":2010000}],\"slug\":\"rock-fest\"}],\"visible_until_utc\":\"2018-09-22T18:00:00\",\"score\":0.434,\"datetime_tbd\":false,\"short_title\":\"Rock Fest\",\"stats\":{\"highest_price\":null,\"lowest_price\":null,\"median_price\":null,\"visible_listing_count\":null,\"dq_bucket_counts\":null,\"listing_count\":null,\"average_price\":null,\"lowest_price_good_deals\":null},\"title\":\"Rock Fest\",\"is_open\":false,\"popularity\":0,\"access_method\":null,\"type\":\"music_festival\",\"date_tbd\":false,\"datetime_utc\":\"2018-09-22T14:00:00\",\"announce_date\":\"2018-08-30T00:00:00\",\"datetime_local\":\"2018-09-22T10:00:00\",\"id\":4515360,\"time_tbd\":false,\"taxonomies\":[{\"name\":\"concert\",\"parent_id\":null,\"id\":2000000},{\"name\":\"music_festival\",\"parent_id\":2000000,\"id\":2010000}],\"created_at\":\"2018-08-30T16:10:03\"}",
      "created_at": "2018-09-22T16:12:50.027Z",
      "updated_at": "2018-09-22T16:12:50.027Z"
    }
  },
  {
    "id": 6,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 15,
      "json_data": "{\"id\":\"pbvGgOyHHbQppE3R3Wx0tA\",\"alias\":\"the-atlantic-boat-club-brooklyn\",\"name\":\"The Atlantic Boat Club\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":20,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":40.68025,\"longitude\":-73.96117},\"transactions\":[],\"location\":{\"address1\":\"990 Atlantic Ave\",\"address2\":\"\",\"address3\":null,\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"990 Atlantic Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186760089\",\"display_phone\":\"(718) 676-0089\",\"distance\":220.26956997243178}",
      "created_at": "2018-09-22T16:17:42.232Z",
      "updated_at": "2018-09-22T16:17:42.232Z"
    },
    "event": {
      "id": 15,
      "json_data": "{\"datetime_utc\":\"2018-09-22T14:00:00\",\"description\":\"\",\"created_at\":\"2018-06-20T16:38:14\",\"stats\":{\"visible_listing_count\":null,\"median_price\":null,\"dq_bucket_counts\":null,\"listing_count\":null,\"lowest_price\":null,\"lowest_price_good_deals\":null,\"highest_price\":null,\"average_price\":null},\"time_tbd\":false,\"popularity\":0,\"title\":\"Hop On Hop Off Sightseeing - New York\",\"short_title\":\"Hop On Hop Off Sightseeing - New York\",\"performers\":[{\"primary\":true,\"images\":{},\"home_venue_id\":null,\"image\":null,\"stats\":{\"event_count\":808},\"popularity\":0,\"divisions\":null,\"location\":null,\"score\":0,\"short_name\":\"Hop On Hop Off Sightseeing\",\"name\":\"Hop On Hop Off Sightseeing\",\"id\":673804,\"type\":\"band\",\"taxonomies\":[{\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"},\"parent_id\":null,\"name\":\"concerts\",\"id\":2000000}],\"num_upcoming_events\":808,\"has_upcoming_events\":true,\"image_license\":null,\"url\":\"https://seatgeek.com/hop-on-hop-off-sightseeing-tickets\",\"colors\":null,\"slug\":\"hop-on-hop-off-sightseeing\",\"image_attribution\":null}],\"announce_date\":\"2018-06-20T00:00:00\",\"score\":0,\"venue\":{\"display_location\":\"New York, NY\",\"postal_code\":\"10018\",\"address\":\"455 12th Ave\",\"timezone\":\"America/New_York\",\"state\":\"NY\",\"access_method\":null,\"id\":446159,\"location\":{\"lat\":40.705,\"lon\":-74.0038},\"score\":0,\"name\":\"Hornblower - Pier 78\",\"popularity\":0,\"num_upcoming_events\":404,\"links\":[],\"country\":\"US\",\"name_v2\":\"Hornblower - Pier 78\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-78/tickets\",\"metro_code\":0,\"has_upcoming_events\":true,\"extended_address\":\"New York, NY 10018\",\"city\":\"New York\",\"slug\":\"hornblower-pier-78\"},\"id\":4421401,\"type\":\"theater\",\"taxonomies\":[{\"parent_id\":null,\"name\":\"theater\",\"id\":3000000}],\"date_tbd\":false,\"status\":\"normal\",\"links\":[],\"url\":\"https://seatgeek.com/hop-on-hop-off-sightseeing-new-york-tickets/theater/2018-09-22-10-am/4421401\",\"access_method\":null,\"visible_until_utc\":\"2018-09-22T18:00:00\",\"is_open\":false,\"datetime_local\":\"2018-09-22T10:00:00\",\"datetime_tbd\":false}",
      "created_at": "2018-09-22T16:17:42.235Z",
      "updated_at": "2018-09-22T16:17:42.235Z"
    }
  },
  {
    "id": 7,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 16,
      "json_data": "{\"id\":\"pbvGgOyHHbQppE3R3Wx0tA\",\"alias\":\"the-atlantic-boat-club-brooklyn\",\"name\":\"The Atlantic Boat Club\",\"image_url\":\"https://s3-media1.fl.yelpcdn.com/bphoto/EScrK21bSyWkK7NwHx73-Q/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/the-atlantic-boat-club-brooklyn?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":20,\"categories\":[{\"alias\":\"seafood\",\"title\":\"Seafood\"}],\"rating\":4.5,\"coordinates\":{\"latitude\":40.68025,\"longitude\":-73.96117},\"transactions\":[],\"location\":{\"address1\":\"990 Atlantic Ave\",\"address2\":\"\",\"address3\":null,\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"990 Atlantic Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+17186760089\",\"display_phone\":\"(718) 676-0089\",\"distance\":220.26956997243178}",
      "created_at": "2018-09-22T16:47:38.813Z",
      "updated_at": "2018-09-22T16:47:38.813Z"
    },
    "event": {
      "id": 16,
      "json_data": "{\"title\":\"Hop On Hop Off Sightseeing - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Hop On Hop Off Sightseeing - New York\",\"datetime_local\":\"2018-09-22T10:00:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":808,\"stats\":{\"event_count\":808},\"popularity\":0,\"type\":\"band\",\"name\":\"Hop On Hop Off Sightseeing\",\"image\":null,\"image_attribution\":null,\"id\":673804,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Hop On Hop Off Sightseeing\",\"slug\":\"hop-on-hop-off-sightseeing\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/hop-on-hop-off-sightseeing-tickets\"}],\"venue\":{\"num_upcoming_events\":404,\"popularity\":0,\"name_v2\":\"Hornblower - Pier 78\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower - Pier 78\",\"city\":\"New York\",\"id\":446159,\"location\":{\"lon\":-74.0038,\"lat\":40.705},\"has_upcoming_events\":true,\"postal_code\":\"10018\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-78\",\"extended_address\":\"New York, NY 10018\",\"metro_code\":0,\"address\":\"455 12th Ave\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-78/tickets\",\"score\":0},\"id\":4421401,\"datetime_utc\":\"2018-09-22T14:00:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T18:00:00\",\"created_at\":\"2018-06-20T16:38:14\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-06-20T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/hop-on-hop-off-sightseeing-new-york-tickets/theater/2018-09-22-10-am/4421401\",\"score\":0}",
      "created_at": "2018-09-22T16:47:38.816Z",
      "updated_at": "2018-09-22T16:47:38.816Z"
    }
  },
  {
    "id": 8,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 17,
      "json_data": "{\"id\":\"lyLXD9CN2FybNcvbTCYldA\",\"alias\":\"stocked-brooklyn-4\",\"name\":\"Stocked\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/T7wwDixOP_KaUCk5nduV-w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/stocked-brooklyn-4?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":131,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"},{\"alias\":\"wine_bars\",\"title\":\"Wine Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.677962,\"longitude\":-73.968413},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"635 Vanderbilt Ave\",\"address2\":null,\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"635 Vanderbilt Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+19292346554\",\"display_phone\":\"(929) 234-6554\",\"distance\":443.642978037096}",
      "created_at": "2018-09-22T16:47:57.800Z",
      "updated_at": "2018-09-22T16:47:57.800Z"
    },
    "event": {
      "id": 17,
      "json_data": "{\"title\":\"Jazzy Champagne Brunch Cruise - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Jazzy Champagne Brunch Cruise - New York\",\"datetime_local\":\"2018-09-22T12:30:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":30,\"stats\":{\"event_count\":30},\"popularity\":0,\"type\":\"band\",\"name\":\"Jazzy Champagne Brunch Cruise\",\"image\":null,\"image_attribution\":null,\"id\":607187,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Jazzy Champagne Brunch Cruise\",\"slug\":\"jazzy-champagne-brunch-cruise\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-tickets\"}],\"venue\":{\"num_upcoming_events\":75,\"popularity\":0,\"name_v2\":\"Hornblower Pier 40\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower Pier 40\",\"city\":\"New York\",\"id\":179519,\"location\":{\"lon\":-74.0113,\"lat\":40.7292},\"has_upcoming_events\":true,\"postal_code\":\"10014\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-40\",\"extended_address\":\"New York, NY 10014\",\"metro_code\":0,\"address\":\"92 Hudson River Greenway\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-40/tickets\",\"score\":0},\"id\":4233508,\"datetime_utc\":\"2018-09-22T16:30:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T20:30:00\",\"created_at\":\"2018-01-25T15:17:46\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-01-25T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-new-york-tickets/theater/2018-09-22-12-30-pm/4233508\",\"score\":0}",
      "created_at": "2018-09-22T16:47:57.803Z",
      "updated_at": "2018-09-22T16:47:57.803Z"
    }
  },
  {
    "id": 9,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 18,
      "json_data": "{\"id\":\"lyLXD9CN2FybNcvbTCYldA\",\"alias\":\"stocked-brooklyn-4\",\"name\":\"Stocked\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/T7wwDixOP_KaUCk5nduV-w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/stocked-brooklyn-4?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":131,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"},{\"alias\":\"wine_bars\",\"title\":\"Wine Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.677962,\"longitude\":-73.968413},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"635 Vanderbilt Ave\",\"address2\":null,\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"635 Vanderbilt Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+19292346554\",\"display_phone\":\"(929) 234-6554\",\"distance\":443.642978037096}",
      "created_at": "2018-09-22T16:47:58.226Z",
      "updated_at": "2018-09-22T16:47:58.226Z"
    },
    "event": {
      "id": 18,
      "json_data": "{\"title\":\"Jazzy Champagne Brunch Cruise - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Jazzy Champagne Brunch Cruise - New York\",\"datetime_local\":\"2018-09-22T12:30:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":30,\"stats\":{\"event_count\":30},\"popularity\":0,\"type\":\"band\",\"name\":\"Jazzy Champagne Brunch Cruise\",\"image\":null,\"image_attribution\":null,\"id\":607187,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Jazzy Champagne Brunch Cruise\",\"slug\":\"jazzy-champagne-brunch-cruise\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-tickets\"}],\"venue\":{\"num_upcoming_events\":75,\"popularity\":0,\"name_v2\":\"Hornblower Pier 40\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower Pier 40\",\"city\":\"New York\",\"id\":179519,\"location\":{\"lon\":-74.0113,\"lat\":40.7292},\"has_upcoming_events\":true,\"postal_code\":\"10014\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-40\",\"extended_address\":\"New York, NY 10014\",\"metro_code\":0,\"address\":\"92 Hudson River Greenway\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-40/tickets\",\"score\":0},\"id\":4233508,\"datetime_utc\":\"2018-09-22T16:30:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T20:30:00\",\"created_at\":\"2018-01-25T15:17:46\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-01-25T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-new-york-tickets/theater/2018-09-22-12-30-pm/4233508\",\"score\":0}",
      "created_at": "2018-09-22T16:47:58.230Z",
      "updated_at": "2018-09-22T16:47:58.230Z"
    }
  },
  {
    "id": 10,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 19,
      "json_data": "{\"id\":\"lyLXD9CN2FybNcvbTCYldA\",\"alias\":\"stocked-brooklyn-4\",\"name\":\"Stocked\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/T7wwDixOP_KaUCk5nduV-w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/stocked-brooklyn-4?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":131,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"},{\"alias\":\"wine_bars\",\"title\":\"Wine Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.677962,\"longitude\":-73.968413},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"635 Vanderbilt Ave\",\"address2\":null,\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"635 Vanderbilt Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+19292346554\",\"display_phone\":\"(929) 234-6554\",\"distance\":443.642978037096}",
      "created_at": "2018-09-22T16:47:58.620Z",
      "updated_at": "2018-09-22T16:47:58.620Z"
    },
    "event": {
      "id": 19,
      "json_data": "{\"title\":\"Jazzy Champagne Brunch Cruise - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Jazzy Champagne Brunch Cruise - New York\",\"datetime_local\":\"2018-09-22T12:30:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":30,\"stats\":{\"event_count\":30},\"popularity\":0,\"type\":\"band\",\"name\":\"Jazzy Champagne Brunch Cruise\",\"image\":null,\"image_attribution\":null,\"id\":607187,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Jazzy Champagne Brunch Cruise\",\"slug\":\"jazzy-champagne-brunch-cruise\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-tickets\"}],\"venue\":{\"num_upcoming_events\":75,\"popularity\":0,\"name_v2\":\"Hornblower Pier 40\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower Pier 40\",\"city\":\"New York\",\"id\":179519,\"location\":{\"lon\":-74.0113,\"lat\":40.7292},\"has_upcoming_events\":true,\"postal_code\":\"10014\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-40\",\"extended_address\":\"New York, NY 10014\",\"metro_code\":0,\"address\":\"92 Hudson River Greenway\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-40/tickets\",\"score\":0},\"id\":4233508,\"datetime_utc\":\"2018-09-22T16:30:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T20:30:00\",\"created_at\":\"2018-01-25T15:17:46\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-01-25T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-new-york-tickets/theater/2018-09-22-12-30-pm/4233508\",\"score\":0}",
      "created_at": "2018-09-22T16:47:58.623Z",
      "updated_at": "2018-09-22T16:47:58.623Z"
    }
  },
  {
    "id": 11,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 20,
      "json_data": "{\"id\":\"lyLXD9CN2FybNcvbTCYldA\",\"alias\":\"stocked-brooklyn-4\",\"name\":\"Stocked\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/T7wwDixOP_KaUCk5nduV-w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/stocked-brooklyn-4?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":131,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"},{\"alias\":\"wine_bars\",\"title\":\"Wine Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.677962,\"longitude\":-73.968413},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"635 Vanderbilt Ave\",\"address2\":null,\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"635 Vanderbilt Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+19292346554\",\"display_phone\":\"(929) 234-6554\",\"distance\":443.642978037096}",
      "created_at": "2018-09-22T16:47:58.981Z",
      "updated_at": "2018-09-22T16:47:58.981Z"
    },
    "event": {
      "id": 20,
      "json_data": "{\"title\":\"Jazzy Champagne Brunch Cruise - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Jazzy Champagne Brunch Cruise - New York\",\"datetime_local\":\"2018-09-22T12:30:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":30,\"stats\":{\"event_count\":30},\"popularity\":0,\"type\":\"band\",\"name\":\"Jazzy Champagne Brunch Cruise\",\"image\":null,\"image_attribution\":null,\"id\":607187,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Jazzy Champagne Brunch Cruise\",\"slug\":\"jazzy-champagne-brunch-cruise\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-tickets\"}],\"venue\":{\"num_upcoming_events\":75,\"popularity\":0,\"name_v2\":\"Hornblower Pier 40\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower Pier 40\",\"city\":\"New York\",\"id\":179519,\"location\":{\"lon\":-74.0113,\"lat\":40.7292},\"has_upcoming_events\":true,\"postal_code\":\"10014\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-40\",\"extended_address\":\"New York, NY 10014\",\"metro_code\":0,\"address\":\"92 Hudson River Greenway\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-40/tickets\",\"score\":0},\"id\":4233508,\"datetime_utc\":\"2018-09-22T16:30:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T20:30:00\",\"created_at\":\"2018-01-25T15:17:46\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-01-25T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-new-york-tickets/theater/2018-09-22-12-30-pm/4233508\",\"score\":0}",
      "created_at": "2018-09-22T16:47:58.984Z",
      "updated_at": "2018-09-22T16:47:58.984Z"
    }
  },
  {
    "id": 12,
    "user": {
      "id": 1,
      "name": "danielo",
      "password": "12345",
      "created_at": "2018-09-19T23:28:02.939Z",
      "updated_at": "2018-09-19T23:28:02.939Z"
    },
    "restaurant": {
      "id": 21,
      "json_data": "{\"id\":\"lyLXD9CN2FybNcvbTCYldA\",\"alias\":\"stocked-brooklyn-4\",\"name\":\"Stocked\",\"image_url\":\"https://s3-media2.fl.yelpcdn.com/bphoto/T7wwDixOP_KaUCk5nduV-w/o.jpg\",\"is_closed\":false,\"url\":\"https://www.yelp.com/biz/stocked-brooklyn-4?adjust_creative=ISfQGfrDCtLq9kXFHgfPKw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ISfQGfrDCtLq9kXFHgfPKw\",\"review_count\":131,\"categories\":[{\"alias\":\"newamerican\",\"title\":\"American (New)\"},{\"alias\":\"sandwiches\",\"title\":\"Sandwiches\"},{\"alias\":\"wine_bars\",\"title\":\"Wine Bars\"}],\"rating\":4,\"coordinates\":{\"latitude\":40.677962,\"longitude\":-73.968413},\"transactions\":[],\"price\":\"$$\",\"location\":{\"address1\":\"635 Vanderbilt Ave\",\"address2\":null,\"address3\":\"\",\"city\":\"Brooklyn\",\"zip_code\":\"11238\",\"country\":\"US\",\"state\":\"NY\",\"display_address\":[\"635 Vanderbilt Ave\",\"Brooklyn, NY 11238\"]},\"phone\":\"+19292346554\",\"display_phone\":\"(929) 234-6554\",\"distance\":443.642978037096}",
      "created_at": "2018-09-22T16:47:59.352Z",
      "updated_at": "2018-09-22T16:47:59.352Z"
    },
    "event": {
      "id": 21,
      "json_data": "{\"title\":\"Jazzy Champagne Brunch Cruise - New York\",\"popularity\":0,\"is_open\":false,\"time_tbd\":false,\"short_title\":\"Jazzy Champagne Brunch Cruise - New York\",\"datetime_local\":\"2018-09-22T12:30:00\",\"type\":\"theater\",\"description\":\"\",\"performers\":[{\"num_upcoming_events\":30,\"stats\":{\"event_count\":30},\"popularity\":0,\"type\":\"band\",\"name\":\"Jazzy Champagne Brunch Cruise\",\"image\":null,\"image_attribution\":null,\"id\":607187,\"location\":null,\"has_upcoming_events\":true,\"primary\":true,\"image_license\":null,\"home_venue_id\":null,\"images\":{},\"divisions\":null,\"short_name\":\"Jazzy Champagne Brunch Cruise\",\"slug\":\"jazzy-champagne-brunch-cruise\",\"colors\":null,\"taxonomies\":[{\"name\":\"concerts\",\"id\":2000000,\"parent_id\":null,\"document_source\":{\"generation_type\":\"FULL\",\"source_type\":\"ELASTIC\"}}],\"score\":0,\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-tickets\"}],\"venue\":{\"num_upcoming_events\":75,\"popularity\":0,\"name_v2\":\"Hornblower Pier 40\",\"timezone\":\"America/New_York\",\"name\":\"Hornblower Pier 40\",\"city\":\"New York\",\"id\":179519,\"location\":{\"lon\":-74.0113,\"lat\":40.7292},\"has_upcoming_events\":true,\"postal_code\":\"10014\",\"links\":[],\"state\":\"NY\",\"access_method\":null,\"country\":\"US\",\"display_location\":\"New York, NY\",\"slug\":\"hornblower-pier-40\",\"extended_address\":\"New York, NY 10014\",\"metro_code\":0,\"address\":\"92 Hudson River Greenway\",\"url\":\"https://seatgeek.com/venues/hornblower-pier-40/tickets\",\"score\":0},\"id\":4233508,\"datetime_utc\":\"2018-09-22T16:30:00\",\"stats\":{\"highest_price\":null,\"dq_bucket_counts\":null,\"visible_listing_count\":null,\"median_price\":null,\"listing_count\":null,\"lowest_price_good_deals\":null,\"average_price\":null,\"lowest_price\":null},\"visible_until_utc\":\"2018-09-22T20:30:00\",\"created_at\":\"2018-01-25T15:17:46\",\"date_tbd\":false,\"links\":[],\"announce_date\":\"2018-01-25T00:00:00\",\"access_method\":null,\"status\":\"normal\",\"datetime_tbd\":false,\"taxonomies\":[{\"name\":\"theater\",\"id\":3000000,\"parent_id\":null}],\"url\":\"https://seatgeek.com/jazzy-champagne-brunch-cruise-new-york-tickets/theater/2018-09-22-12-30-pm/4233508\",\"score\":0}",
      "created_at": "2018-09-22T16:47:59.361Z",
      "updated_at": "2018-09-22T16:47:59.361Z"
    }
  }
],
  currentProgram: null,
}

const search = (state = initialSearchState, action) => {
  switch(action.type) {
    case 'START_ADDING_RESTAURANTS_REQUEST':
      return { ...state, loadingRestaurants: true }
    case 'ADD_RESTAURANTS':
      return { ...state, restaurantsResults: action.data.businesses, loadingRestaurants: false }
    case 'START_ADDING_EVENTS_REQUEST':
      return { ...state, loadingEvents: true }
    case 'ADD_EVENTS':
      return { ...state, eventsResults: action.data.events, loadingEvents: false }
    case 'SHUFFLE':
      return state
    default:
      return state;
  }
}

const user = (state = initialUserState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return state
    case 'LOG_IN':
      return state
    case 'LOG_OUT':
      return state
    default:
      return state;
  }
}

const program = (state = initialProgramState, action) => {
  switch(action.type) {
    // case 'SAVE_SUCCESS_MESSAGE':
    //   return { ...state, message: 'Program Saved!'}
    case 'SELECT_PROGRAM':
      return { ...state, currentProgram: action.payload}
    case 'CREATE_PROGRAM':
      return state
    case 'EDIT_PROGRAM':
      return state
    case 'UPDATE_PROGRAM':
      return state
    case 'DELETE_PROGRAM':
      return state
    default:
      return state;
  }
}

const event = (state = initialEventState, action) => {
  switch(action.type) {
    case 'SELECT_EVENT':
      if (state.currentEvent === action.payload) {
        return { ...state, currentEvent: null }
      } else {
        return { ...state, currentEvent: action.payload }
      }
    default:
      return state;
  }
}

const restaurant = (state = initialRestaurantState, action) => {
  switch(action.type) {
    case 'SELECT_RESTAURANT':
      if (state.currentRestaurant === action.payload) {
        return { ...state, currentRestaurant: null }
      } else {
        return { ...state, currentRestaurant: action.payload }
      }
    default:
      return state;
  }
}

export default combineReducers({
  search,
  user,
  program,
  restaurant,
  event,
})
