import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './style.scss'

class Category extends Component {

    render() {
        return (
           
                <div className="panel-body">
                    <form>
                        <div>
                            <span><label>{this.props.name}</label></span> <br />
                        </div>
                    </form>
                </div>
          

        );
    }
}

export default Category;