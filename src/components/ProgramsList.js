import React from 'react';
import { connect } from 'react-redux'


const ProgramsList = (props) => {
  return (<div>Hello from ProgramsList</div>)
}
const mapStateToProps = (state) => {
  return state.restaurantsResults[0]
}

export default connect(mapStateToProps)(ProgramsList)
