import React, { Component } from 'react';
import '../assets/css//App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import MyPrograms from './containers/MyPrograms'
import ProgramView from './containers/ProgramView'

const App = ({store}) => (
      <Provider store={store}>
        <Router>
        <div class="navbar">
          <Route path="/" component={Home} exact />
          <Route path="/programs" component={MyPrograms} exact />
          <Route path="/programs/:id" component={ProgramView} />
        </div>
        </Router>
      </Provider>
    )

export default App;
