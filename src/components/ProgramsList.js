import React from 'react';
import { connect } from 'react-redux'
import Program from './Program'
import '../assets/css/ProgramsList.css'


const ProgramsList = ({ programs }) => {
  if (programs) {
    return (
      <div className="programs-wrapper">
        <ul>
          {programs.map(p => <Program key={p.id} program={p}/>)}
        </ul>
      </div>
    )
  } else {
      return (
      <h1>no programs!</h1>
    )
  }
}

export default connect(s => s.program)(ProgramsList)
