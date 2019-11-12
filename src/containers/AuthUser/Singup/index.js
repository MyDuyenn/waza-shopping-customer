import React from 'react';
import { Link } from '@reach/router';
import SignupForm from '../../../components/Signup'
import { Label } from 'reactstrap';
import {SignUp} from '../thunk';
import {connect} from 'react-redux'

class Signup extends React.Component {
    handleSubmit = values => {
        this.props.SignUp(values)
    }
    render(){
        return (
            <div className="background">
            <div className='wellcome-header'>
            Wellcome To Waza Shopping
            </div>
                <div className=" bg-white signup-form from container text-center col-xl-6 col-md-8 " >
                    <SignupForm onSubmit={this.handleSubmit}/>
                    <Label> Here already an account ?<Link to='/'> <b> Login Here </b></Link></Label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps =  dispatch => ({
    SignUp: data => dispatch(SignUp(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Signup);