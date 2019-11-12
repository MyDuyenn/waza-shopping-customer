import React, { Component } from 'react';
import ShopCell from './ShopCell';
import './style.scss'


export class ShopList extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row shop-list'>
                    <div className='col-12 shop-list-cell'>
                        <ShopCell/>
                    </div>
                    <div className='col-12 shop-list-cell'>
                    <ShopCell/>
                    </div>
                    <div className='col-12 shop-list-cell'>
                    <ShopCell/>
                </div>
                <div className='col-12 shop-list-cell'>
                <ShopCell/>
                </div>
                </div>
            </div>
        );
    }
}

export default ShopList;
