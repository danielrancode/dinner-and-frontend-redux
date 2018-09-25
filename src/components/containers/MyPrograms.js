import React, { Component } from 'react';
import ProgramsList from '../ProgramsList'
import { connect } from 'react-redux'
import { fetchPrograms } from '../../actions.js'

class MyPrograms extends Component {


  componentDidMount() {
    this.props.fetchPrograms(this.props.user.currentUser.id)
  }

  render() {
    return (this.props.program.programs.length > 0) ?
    (
      <div>
        <ProgramsList programs={this.props.programs}/>
      </div>
    ) : (
      <h1>no Programs</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchPrograms })(MyPrograms)
