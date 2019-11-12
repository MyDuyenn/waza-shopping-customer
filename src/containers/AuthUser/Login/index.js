import React from 'react';
import LoginForm from '../../../components/Login'
import {LoginUser} from '../thunk';
import {connect} from 'react-redux'

class Login extends React.Component {
    handleSubmit = values => {
        this.props.loginUser(values)
    }
    render(){
        return (
            <div className="background">
            <div className='wellcome-header'>
            Wellcome To Waza Shopping
            </div>
                <div className=" bg-white Login-form from container text-center col-xl-6 col-md-8 " >
                    <LoginForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps =  dispatch => ({
    loginUser: data => dispatch(LoginUser(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);