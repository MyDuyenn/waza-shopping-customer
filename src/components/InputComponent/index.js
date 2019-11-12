import React, { Component } from 'react'
import {Input} from 'reactstrap';
export default class InputComponent extends Component {
    handleOnChange = value => {
        this.props.input.onChange(value)
    }
    handleOnBlur = value => {
        this.props.input.onBlur(value)
    }
    render() {
        return (
            <React.Fragment>
            <Input className='input-component' onChange={this.handleOnChange} onBlur={this.handleOnBlur} name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} />
            {this.props.meta.touched &&
                ((this.props.meta.error && <span className='text-danger mr-auto'>{this.props.meta.error[0]}</span>) ||
                  (this.props.warning && <span>{this.props.warning}</span>))}
            </React.Fragment>
        )
    }
}
