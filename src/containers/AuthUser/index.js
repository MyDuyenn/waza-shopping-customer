import React, { Component } from 'react'
import LoginPage from './Login'
import SignupPage from './Singup'
import {Router,Redirect} from '@reach/router'
import {connect} from 'react-redux'
class AuthPage extends Component {
    render() {
        if(this.props.token) {
            console.log('huh')
                return <Redirect to='/' noThrow/>
        }
        return (
            <Router>
            <LoginPage path='/'/>
            <SignupPage path='/signup'/>
            </Router>
        )
    }
}
const mapStateToProps = (state) => ({
    token: state.authUser.token
})
export default connect(mapStateToProps)(AuthPage)