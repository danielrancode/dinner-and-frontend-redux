import React from 'react';
import '../assets/css//App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProgramMaker from './containers/ProgramMaker'
import MyPrograms from './containers/MyPrograms'
import ProgramView from './containers/ProgramView'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import { connect } from 'react-redux'
import { loginUser, logout } from '../actions'
import '../assets/css/App.css'
// import Button from '@material-ui/core/Button'

const App = (props) => {
  return props.user.loggedIn ? (
        <Router>
          <div className="wrapper">
          <button onClick={props.logout}>Log Out</button>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/programs'>My Programs</Link>
              </li>
            </ul>

            <Route path="/" component={ProgramMaker} exact />
            <Route path="/programs" component={MyPrograms} exact />
            <Route path="/programs/:id" component={ProgramView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </div>
        </Router>
    ) : (
        <Router>
          <div className="wrapper">
            {/*}<ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Sign Up / Log In</Link>
              </li>
            </ul>*/}

            <Route path="/" component={ProgramMaker} exact />
            <Route path="/programs" component={MyPrograms} exact />
            <Route path="/programs/:id" component={ProgramView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </div>
        </Router>
    )
}
// const App = (props) => {
//   return props.user.loggedIn ? (
//         <Router>
//           <div className="wrapper">
//           <h1>{props.user.message}</h1>
//           <button onClick={props.logout}>Log Out</button>
//
//             <ul>
//               <li>
//                 <Link to='/'>Home</Link>
//               </li>
//               <li>
//                 <Link to='/signup'>Sign Up</Link>
//               </li>
//               <li>
//                 <Link to='/login'>Log In</Link>
//               </li>
//               <li>
//                 <Link to='/programs'>My Programs</Link>
//               </li>
//               <li>
//                 <Link to='/programs/:id'>Program View</Link>
//               </li>
//             </ul>
//
//             <Route path="/" component={ProgramMaker} exact />
//             <Route path="/programs" component={MyPrograms} exact />
//             <Route path="/programs/:id" component={ProgramView} />
//             <Route path="/signup" component={SignUp} />
//             <Route path="/login" component={LogIn} />
//           </div>
//         </Router>
//     ) : (
//         <Router>
//           <div className="wrapper">
//           <h1>{props.user.message}</h1>
//             <ul>
//               <li>
//                 <Link to='/'>Home</Link>
//               </li>
//               <li>
//                 <Link to='/signup'>Sign Up</Link>
//               </li>
//               <li>
//                 <Link to='/login'>Log In</Link>
//               </li>
//               <li>
//                 <Link to='/programs'>My Programs</Link>
//               </li>
//               <li>
//                 <Link to='/programs/:id'>Program View</Link>
//               </li>
//             </ul>
//
//             <Route path="/" component={ProgramMaker} exact />
//             <Route path="/programs" component={MyPrograms} exact />
//             <Route path="/programs/:id" component={ProgramView} />
//             <Route path="/signup" component={SignUp} />
//             <Route path="/login" component={LogIn} />
//           </div>
//         </Router>
//     )
// }

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { loginUser, logout })(App);
