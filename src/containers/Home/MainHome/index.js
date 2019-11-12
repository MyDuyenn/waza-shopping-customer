import React, { Component } from "react";
import "./style.scss";
import {Link} from '@reach/router';
import { Card } from "react-bootstrap";
import HorizontalCategory from "../../../components/HorizontalCategory";
import {requestGetShop} from './thunk';
import {connect} from 'react-redux'
import ShopList from "../../../components/ShopList";
import LocationSearch from "../../../components/LocationSearch";
 class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "allShop"
    };
  }
  handleOnClick = key => {
    this.setState({
      category: key
    });
  };
  category = [
    {
      name: "All",
      key: "allShop"
    },
    {
      name: "New",
      key: "newShop"
    },
    {
      name: "Hot",
      key: "hotShop"
    },
    {
      name: "Special",
      key: "special"
    }
  ];

  componentDidMount() {
    this.props.requestGetShop({
      pagination:{
        perPage:10,
        page:1
      }
    })
  }

  render() {
    return (
      <div>
        <div className="main-home-banner">
          <img src="background.jpg" className="img-fluid" />
        </div>
        <LocationSearch/>
        <hr></hr>
        <div className="container-fluid main-home-container">
          <div className="row">
            <div className="col-12">
              <Card className='main-home-card'>
                <Card.Header className="container-fluid main-home-card-header">
                  <div className="row main-home-card-header-category">
                    {this.category.map(element => {
                      return (
                        <div className="col-3" key={element.key}>
                          <HorizontalCategory
                            name={element.name}
                            key={element.key}
                            handleOnClick={() =>
                              this.handleOnClick(element.key)
                            }
                            className={`btn btn-default btn-block main-home-card-header-category-button ${
                              this.state.category === element.key
                                ? "active"
                                : ""
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </Card.Header>
                <Card.Body>
                    <ShopList/>
                    <button>
                      <Link to='shop/1'>Shop Detail</Link>
                    </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => {
  return{
  requestGetShop: params => dispatch(requestGetShop(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHome)