import React from 'react';
import SearchForm from '../SearchForm';
import RestaurantsList from '../RestaurantsList';
import EventsList from '../EventsList';
import Map from '../Map';

const Home = () => (
  <div>
    <SearchForm />
    <RestaurantsList />
    <EventsList />
  </div>
)

export default Home
