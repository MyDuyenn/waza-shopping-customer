import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import './style.scss';

class Item extends Component {

    render() {
        return (
            <div className="panel-body">
                <form>
                    <div>
                        {/* LIST */}
                        <div id="shop-menus-item" data-section="menu">
                            <div className="row ">
                                <div className="col-xs-6 col-sm-10 col-md-12 col-lg-12">
                                    <div className="shop-food-menu ">

                                        {/* ITEM */}
                                        <ul>
                                            <li>
                                                <div className="shop-food-desc">
                                                    <figure>
                                                        <Image src={this.props.image} className='img-responsive' />
                                                    </figure>
                                                    
                                                    <div>
                                                        <h3>{this.props.name}</h3>
                                                        <p>{this.props.des}</p>
                                                    </div>

                                                </div>
                                                <div className="shop-food-pricing">
                                                    <a>{this.props.price} VND</a>
                                                    <span className="fa fa-plus-square ml-5" id="cart_icon"></span>
                                                </div>
                                            </li>
                                        </ul>
                                        {/* // */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // */}
                    </div>
                </form>
            </div>


        );
    }
}

export default Item;