import React, { Component } from 'react'

export default class HorizontalCategory extends Component {
    render() {
        return (
        <button 
            onClick={this.props.handleOnClick} 
            className={this.props.className}>
            {this.props.name}
        </button>
        )
    }
}
