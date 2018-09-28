import React from 'react';
import { connect } from 'react-redux'
import Program from './Program'

const MiniProgramsList = ({ programs }) => {
  if (programs) {
    return (
      <ul>
        {programs.map(p => <Program key={p.id} program={p}/>)}
      </ul>
    )
  } else {
      return (
      <h1>You don't have any programs yet!</h1>
    )
  }
}


const mapStateToProps = (state) => {
  return { programs: state.program.programs }
}


export default connect(mapStateToProps)(MiniProgramsList)
