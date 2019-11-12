import React from 'react';
import Item from './Item';
import './ShoppingCart.scss';


class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Thịt gà',
                    price: 100000,
                    quantity: 1,
                    img: 'https://images.foody.vn/res/g64/632674/s570x570/201867162841-phi-le-ca-hoi-tuoi.jpg',
                    total: 100000,
                    status: true
                },
                {
                    id: 2,
                    name: 'Thịt heo',
                    price: 120000,
                    quantity: 1,
                    img: 'https://images.foody.vn/res/g64/632674/s570x570/201867153514-thit-dau-than-ngoai-bo-c.grim-300g.jpg',
                    total: 120000,
                    status: true
                },
                {
                    id: 3,
                    name: 'Rau xanh',
                    price: 100000,
                    quantity: 1,
                    img: 'https://images.foody.vn/res/g64/632674/s570x570/20185179407-untitled-1.jpg',
                    total: 100000,
                    status: true
                },

            ],
            sumtotal: 0
        }
    }

    render() {
        return (
            <div className="shoppingcart">
                <p className='title'>SHOPPING CART</p>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>

                        </tr>
                    </thead>
                    {
                        this.state.products.map((product, index) => {
                            return <Item
                                key={index}
                                product={product} />
                        })
                    }
                </table>
                <div className="total ">
                    <div className="row">
                        <div className="col-8">
                            <p>NOTE :</p>
                            <from>

                                <textarea></textarea>
                            </from>
                        </div>
                        <div className="col-4">
                            <p>   <input type="text" placeholder="CODE " /> APPLY  CODE</p>
                            <p> SUBTOTAL :   <span>{this.state.sumtotal}</span></p>
                            <p>TOTAL :   <span>1000000</span></p>
                            <button className="checkout">
                                Checkout
                             </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Cart;


// <div className="total">
// <p>CART TOTALS</p>
// <thead>
//     <tr>
//         <th>Sub total</th>
//         <td>{this.state.sumtotal}</td>

//     </tr>
// </thead>
// <tbody>
//     <tr>
//         <th>Total</th>
//         <td>{this.state.sumtotal}</td>
//     </tr>
// </tbody>
// </div>