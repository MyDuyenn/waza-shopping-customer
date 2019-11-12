import React from 'react';
import {Router} from "@reach/router";
import Home from './containers/Home'
import './App.css'
import AuthPage from './containers/AuthUser';
import {getCurrentUser} from './containers/AuthUser/action'
import {connect} from 'react-redux'
class App extends React.Component {
  componentWillMount(){
    const token = localStorage.getItem('token') || null
    const user = JSON.parse(localStorage.getItem('user')) || {}
    this.props.getCurrentUser({token,user})
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Home path='/*'/>
          <AuthPage path='/auth/*'/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authUser.token,
  user: state.authUser.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: (data) => dispatch(getCurrentUser(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
