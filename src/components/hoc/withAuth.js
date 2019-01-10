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

      // debugger

      // if logged in...
      if (localStorage.getItem('jwt') && this.props.loggedIn) {

        // if path is "login" or "signup", redirect to "/", return component for all other paths
        if (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") {

          return <Redirect to={this.props.location.state ? this.props.location.state.from : "/"}  />
        } else {
          return <WrappedComponent />
        }
      }

      // if logging in, show "logging in..."
      if (localStorage.getItem('jwt') && this.props.loggingIn) {
        return (<h1>logging in........................</h1>)
      }

      // if not logged in but token is available , redirect to login, passing in the last location
      if (localStorage.getItem('jwt')) {
        return <Redirect to={{ pathname: "/login", state: { from: this.props.location } }} />
      }

      // if not logged in and paths are "/" or "/login" or "/signup", return component
      if (this.props.location.pathname === "/" || this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") {
        return <WrappedComponent />
      }

      // not logged in and paths are "/programs" (or anything else)
      return <Redirect to={{ pathname: "/login", state: { from: this.props.location } }} />

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
