import React, { Component } from "react";
import { Navbar, Nav,Image,Accordion,Button } from "react-bootstrap";
import NavLink from "../../components/NavLink";
import "./style.scss";
import SearchShop from "../../components/SearchShop";
class NavbarController extends Component {
  render() {
    return (
      <div className='navbar-main'>
      <Navbar className="main-color">
        <NavLink className="text-link-main" to="/">
            <Image src='image/logo.png' className='navbar-image'></Image>
        </NavLink>
        <Nav className='mr-auto navbar-shop-search-lg'>
          <SearchShop/>          
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink className="text-link-main" to="account/234">
            <i className="fa fa-user"></i>{' '}
              {this.props.user.username }
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
        <div className='navbar-shop-search'>
        <Accordion>
        <Accordion.Toggle as={Button} variant="button" className='btn btn-block h-50' eventKey="0">
          Search Shop {' '} <i className="fa fa-caret-down"></i>
         </Accordion.Toggle>
         <Accordion.Collapse className='navbar-shop-search-sm' eventKey="0">
          <SearchShop/>
        </Accordion.Collapse>
        </Accordion>
        </div>
      </div>
    );
  }
}

export default NavbarController;
