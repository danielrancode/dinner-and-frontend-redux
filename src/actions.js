
export function selectRestaurant(restaurant) {
  return {
    type: 'SELECT_RESTAURANT',
    payload: restaurant,
  }
}
