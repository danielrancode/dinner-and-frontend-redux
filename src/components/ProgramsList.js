import React from 'react';
import { connect } from 'react-redux'
import Program from './Program'

const ProgramsList = ({ programs }) => {
  console.log("programs: ", programs)
  if (programs) {
    return (
      <ul>
        {programs.map(p => <Program key={p.id} program={p}/>)}
      </ul>
    )
  } else {
      return (
      <h1>no programs!</h1>
    )
  }
}


const mapStateToProps = (state) => {
  return { programs: state.program.programs }
}


export default connect(mapStateToProps)(ProgramsList)
