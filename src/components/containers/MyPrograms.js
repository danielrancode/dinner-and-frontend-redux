import React from 'react';
import ProgramsList from '../ProgramsList'
import { connect } from 'react-redux'
import { fetchPrograms } from '../../actions.js'

const MyPrograms = () => {
  fetchPrograms()
  return (
    <div>
      <p>Hello from MyPrograms</p>
      <ProgramsList />
    </div>
  )
}

export default MyPrograms
