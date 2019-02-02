import React, { Component } from 'react';
import ProgramsList from '../ProgramsList'
import { connect } from 'react-redux'
import { fetchPrograms } from '../../actions.js'
import withAuth from '../hoc/withAuth'
import '../../assets/css/MyPrograms.css'


class MyPrograms extends Component {


  componentDidMount() {
    this.props.fetchPrograms(this.props.user.currentUser.id)
  }

  render() {
    return (this.props.program.programs.length > 0) ?
    (
      <div className="my-programs">
        <ProgramsList programs={this.props.programs}/>
      </div>
    ) : (
      <h1>no Programs</h1>
    )
  }
}

export default withAuth(
  connect(state => state, { fetchPrograms })(MyPrograms)
)
