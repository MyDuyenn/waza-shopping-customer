import React, { Component } from 'react';
import './style.scss';
import {
    Card,
    Nav,
    Media
} from 'react-bootstrap';
import { CardBody } from 'react-bootstrap/Card';

class NavProfile extends Component {
    render() {
        return (
            <Card>
                <Card.Header>

                    <Media style={{ marginLeft: "2%" }}>
                        <img style={{ marginLeft: "5%" }}
                            width={45}
                            height={45}
                            className="mr-3"
                            src="https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png"
                            roundedCircle />
                        <Media.Body style={{ marginRight: "20%" }}>
                            <h5 className="mr-1">User Name</h5>
                        </Media.Body>
                    </Media>
                </Card.Header>

                <Card.Body>
                    <Nav variant="light" className="flex-column">
                        <Nav.Item style={{ marginBlockEnd: "2%", marginRight: "5%" }}>
                            <Nav.Link eventKey="#link1" style={{ color: 'black' }}>
                                <span className="fa fa-user"></span> &nbsp;
                            Account Update</Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{ marginBlockEnd: "2%" }}>
                            <Nav.Link eventKey="#link2" style={{ color: 'black' }}>
                                <span className="fa fa-shopping-cart" ></span> &nbsp;
                                Order information
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ marginBlockEnd: "2%", color: 'black' }}>
                            <Nav.Link eventKey="#link3" style={{ color: 'black' }}>
                                <span className="fa fa-credit-card" ></span> &nbsp;
                                Payment method
                                </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>
        );
    }
}

export default NavProfile;