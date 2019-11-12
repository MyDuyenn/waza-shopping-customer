import React, { Component } from "react";
import './style.scss'

export class ShopCell extends Component {
  render() {
    return (
      <div className="shop-cell">
        <div className='shop-cell-image'>
          <img src="image/shop-icon.png" />
        </div>
        <div className='shop-cell-info'>
            <div className='shop-cell-info-title'>
                My Shop
            </div>
            <div className='shop-cell-info-content'>
            <div className='shop-cell-info-content-address'>
                30 Ngo Thai Thanh, Phuong 6 , quan 3
            
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ShopCell;
