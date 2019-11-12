import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';

class ShopInfo extends Component {
    render() {
        return (
            <div className="container-fluid shop-container">
                <div className="row">
                    <div className="col-12">
                        <Card className='container-fluid shop-container-card-header'>
                            <div className="row ">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <img src={this.props.image}
                                        className="img-fluid" alt={this.props.name}/>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="shop-card-header-info">
                                    <h4 className="shop-title">
                                        <strong>
                                            <a>{this.props.title}</a>
                                        </strong>
                                    </h4>
                                    <p className="shop-address">
                                        {this.props.address}
                                    </p>
                                    <p className="shop-phone">
                                        {this.props.phone}
                                    </p>
                                    <ul className="shop-rating">
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star-o'></i>
                                    </ul>
                                    <span className="fa fa-circle shop-status">
                                        &nbsp;<a>Open</a>
                                    </span>
                                    &nbsp; &nbsp;
                                    <p className="fa fa-clock-o shop-open-time">
                                        &nbsp;<a>{this.props.openTime} - {this.props.closeTime}</a>
                                    </p>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </div>

                </div>

            </div>
        );
    }
}

export default ShopInfo;