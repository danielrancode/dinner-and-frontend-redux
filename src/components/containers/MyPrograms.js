import React, { Component } from 'react';
import ProgramsList from '../ProgramsList'
import { connect } from 'react-redux'
import { fetchPrograms } from '../../actions.js'

class MyPrograms extends Component {


  componentDidMount() {
    this.props.fetchPrograms(this.props.user.currentUser.id)
  }

  render() {
    return (
      <div>
        <ProgramsList programs={this.props.programs}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchPrograms })(MyPrograms)
