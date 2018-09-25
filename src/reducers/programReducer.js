const initialProgramState = {
  programs: [],
  loadingPrograms: false,
  currentProgram: null,
  currentEvent: null,
  currentRestaurant: null,
}

export const program = (state = initialProgramState, action) => {
  switch(action.type) {
    case 'START_ADDING_PROGRAMS_REQUEST':
      return { ...state, loadingPrograms: true }
    case 'ADD_PROGRAMS':
      return { ...state, programs: action.data, loadingprograms: false }
    case 'SELECT_EVENT':
      if (state.currentEvent === action.payload) {
        return { ...state, currentEvent: null }
      } else {
        return { ...state, currentEvent: action.payload }
      }
    case 'SELECT_RESTAURANT':
      if (state.currentRestaurant === action.payload) {
        return { ...state, currentRestaurant: null }
      } else {
        return { ...state, currentRestaurant: action.payload }
      }
    case 'SELECT_PROGRAM':
      return { ...state, currentProgram: action.program}
    case 'SAVE_SUCCESS':
      return { ...state, message: "Program saved!"}
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

export default program
