import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import './style.scss';
import Item from './Item';

class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopitem: [
                {
                    id: 1,
                    name: 'Pineapple Juice',
                    price: 17.500,
                    image: "https://nilp.vn/wp-content/uploads/2018/10/Dau-Da-Day-An-Nho-Duoc-Khong-1.jpg",
                    des: 'Xuat xu: USA',
                },
                {
                    id: 2,
                    name: 'Pineapple Juice',
                    price: 17.500,
                    image: "https://nilp.vn/wp-content/uploads/2018/10/Dau-Da-Day-An-Nho-Duoc-Khong-1.jpg",
                    des: 'Xuat xu: USA',
                },
                {
                    id: 3,
                    name: 'Pineapple Juice',
                    price: 17.500,
                    image: "https://nilp.vn/wp-content/uploads/2018/10/Dau-Da-Day-An-Nho-Duoc-Khong-1.jpg",
                    des: 'Xuat xu: USA',
                },
            ]

        };
    }
    render() {

        let elements = this.state.shopitem.map((item, index) => {
            return <Item
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        des={item.des} >
                    </Item>
        });
        
        return (
            <div style={{ marginBlockEnd: "10%" }}>
                <Card className="panel panel-primary">
                    {/* KHUNG SEARCH + CART */}
                    <Card.Header className="panel-heading">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="input-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Nhập từ khóa..." />
                                    &nbsp;
                                    <button className="btn btn-sm btn-info" type="button">
                                        <span className="fa fa-search mr-5" id="search_icon"> &nbsp;<a>Search</a></span>

                                    </button>
                                    <span className="fa fa-cart-plus ml-5" id="cart_icon"></span>
                                </div>
                            </div> 
                        </div>
                    </Card.Header>
                    {/* // */}
                    <Card.Body>
                        {elements}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ShopItem;