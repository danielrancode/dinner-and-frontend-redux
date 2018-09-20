import React from 'react';
import ProgramsList from '../ProgramsList'
import { connect } from 'react-redux'

const MyPrograms = () => {
  return (
    <div>
      <p>Hello from MyPrograms</p>
      <ProgramsList />
    </div>
  )
}

export default connect()(MyPrograms)
