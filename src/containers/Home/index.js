import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import { userLogout } from "../AuthUser/action";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import MainHome from "./MainHome";
import ShopDetail from "../ShopDetail";
import Profile from "../../components/Profile";

class Home extends Component {
  render() {
    if (!this.props.token) {
      console.log("here");
      return <Redirect to="/auth" noThrow />;
    }
    return (
      <div>
        <Navbar user={this.props.user} />
        <Router>
          <MainHome path="/" />
          <ShopDetail path="/shop/:id" />
          <Profile path="account/:id" />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authUser.token,
  user: state.authUser.user
})

const mapDispatchToProps = dispath => {
  return {
    userLogout: () => dispath(userLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
