import React from 'react';
import './Signup.scss';
import { Col, FormGroup, Label } from 'reactstrap';
import Input from '../InputComponent'
import { Field, reduxForm } from 'redux-form'


const validateAdminCreation = (values) => {
    const errors = {};
    const emailValid = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/;
    if (!values.username) {
        errors.username = ['The username is required']
    } else if (values.username.length < 8) {
        errors.username = ['username not long enough']
    }
    if (!values.email) {
        errors.email = ['The email is required']
    } else if (!emailValid.test(values.email)) {
        errors.email = ['Wrong email format'];
    }
    if (!values.password) {
        errors.password = ['The password is required']
    } else if (values.password.length < 8) {
        errors.password = ['password is not long enough']
    }
    if(values.password2!==values.password){
        errors.password = ['Please match two password to confirm']
        errors.password2 = ['Please match two password to confirm']
    }
    if(!values.phone) {
        errors.phone = ['Phone is required or must be number']
    }
    return errors
};
class Signup extends React.Component {

    render(){
        return (
                    <form onSubmit={this.props.handleSubmit}>
                        <Label style={{ fontSize: "38px" }}>Sign up</Label>
                        <FormGroup row >
                            <Col>
                                <Field name='username' placeholder='Username' component={Input}/>
                            </Col>
                        </FormGroup>
    
                        <FormGroup row >
                            <Col  >
                                <Field name='email' placeholder='Email' component={Input}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                        <Col>
                            <div className='phone-input'>
                                <Field name='phone' placeholder='Phone' type="number" component={Input}/>
                            </div>
                        </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Col >
                                <Field name='password' placeholder='Password' type="password" component={Input}/>
                            </Col>
                        </FormGroup>
    
                        <FormGroup row >
                            <Col  >
                                <Field name='password2' placeholder='Password confirm' type="password" component={Input}/>
                            </Col>
                        </FormGroup>
    
                        <FormGroup check>
                                <Field name='check' type="checkbox" component={Input}/>
                                {'  '}
                                <Label>
                                I agree all statements in Terms or Service
                                </Label>
                        </FormGroup>
                        
                        <FormGroup row>
                        <Col >
                            <button className='btn' type='submit' style={{ backgroundColor: "dodgerblue", width: "100%", border: "white 1px solid","marginBlockStart":"20px" }}>Sign up</button>
                            </Col>
                        </FormGroup>
                    </form>
        );
    }
}


export default reduxForm({
    form: 'signup',
    validate:validateAdminCreation
})(Signup);