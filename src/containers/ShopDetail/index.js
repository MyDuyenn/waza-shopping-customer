import React, { Component } from 'react';
import './style.scss';
import ShopInfo from '../../components/ShopDetail/ShopInfo';
import ShopMenu from '../../components/ShopDetail/ShopMenu';
import ShopItem from '../../components/ShopDetail/ShopItem';

class ShopDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shop: [
                {
                    image: 'https://media.ex-cdn.com/EXP/media.doanhnhan.vn/files/content/2019/09/09/vinmart-1824.jpg',
                    title: 'VinMart - Tô Hiến Thành',
                    address: '82 Tô Hiến Thành, phường 15, quận 10, TP Hồ Chí Minh',
                    phone: '(+84) 02471066866',
                    openTime: '06:00',
                    closeTime: '22:00'
                }
            ]
        }
    }

    render() {

        let elements = this.state.shop.map((shop) => {
            return <ShopInfo
                        image={shop.image}
                        title={shop.title}
                        address={shop.address}
                        phone={shop.phone}
                        openTime={shop.openTime}
                        closeTime={shop.closeTime} />

        });

        return (
            <div>
                {/* Shop info */}
                {elements}

                {/* Shop Menu */}
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2">
                            <ShopMenu />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-9 col-lg-10">
                            <ShopItem />
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ShopDetail;