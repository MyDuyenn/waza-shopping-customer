import React, { Component } from 'react';
import './style.scss';
import { Tab, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import NavProfile from './NavProfile';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={3}>
                            <NavProfile />
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                  Cập Nhật Tài khoản
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                  Thông tin đơn hàng
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link3">
                                   PHương thước thanh toán
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link4">
                                  Hello world
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link5">
                            Hello Hello
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                
            </div>

        );
    }
}

export default Profile;