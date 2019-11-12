import React, { Component } from 'react'

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
            sumtotal: this.props.sumtotal
        }
    }


    changeQuantity = () => {
        this.setState((prevState) => ({
            // Spread Operator - Thay doi noi bo cua thuoc tinh
            product: { ...prevState.product, quantity: prevState.product.quantity + 1, total: prevState.product.total + prevState.product.price }


        }))
    }

    changeQuantity2 = () => {
        this.setState((prevState) => ({
            // Spread Operator - Thay doi noi bo cua thuoc tinh
            product: { ...prevState.product, quantity: prevState.product.quantity - 1, total: prevState.product.total - prevState.product.price }

        }))
    }
    render() {
        if (this.state.product.quantity === 1) {
            return (
                <tbody>
                    <tr >
                        <td><img className="img" src={this.props.product.img} /> </td>
                        <td>{this.state.product.name}</td>
                        <td>{this.state.product.price}</td>
                        <td>
                            <p className="quantity">
                                <button disabled onClick={this.changeQuantity2}> - </button>
                                <span>  {this.state.product.quantity}</span>
                                <button onClick={this.changeQuantity}> + </button>
                            </p>
                        </td>
                        <td>{this.state.product.total}</td>
                        <td><span class="glyphicon glyphicon-remove">X</span></td>
                    </tr>
                </tbody>
            )
        }
        else {
            return (
                <tbody>
                    <tr >
                        <td><img className="img" src={this.props.product.img} /> </td>
                        <td>{this.state.product.name}</td>
                        <td>{this.state.product.price}</td>
                        <td>
                            <p className="quantity">
                                <button onClick={this.changeQuantity2}> - </button>
                                <span>  {this.state.product.quantity}</span>
                                <button onClick={this.changeQuantity}> + </button>
                            </p>
                        </td>
                        <td>{this.state.product.total}</td>
                        <td><span class="glyphicon glyphicon-remove">X</span></td>
                    </tr>
                </tbody>
            )
        }
    }

}


export default Item;
