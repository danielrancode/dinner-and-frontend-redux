import React from 'react';
import { connect } from 'react-redux'
import Program from './Program'

const ProgramsList = ({ programs }) => {
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

export default connect(s => s.program)(ProgramsList)
