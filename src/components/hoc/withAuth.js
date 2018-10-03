import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import * as actions from '../../actions'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends Component {
    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && this.props.loggingIn) {
        return (<h1>logging in........................</h1>)
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.user.loggedIn,
      loggingIn: state.user.loggingIn
    }
  }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     fetchCurrentUser: () => dispatch(actions.fetchCurrentUser())
  //   }
  // }

  return connect(mapStateToProps, actions)(AuthorizedComponent)
}

export default withAuth
