import React from "react";
import "./Login.scss";
import { Col, Button, FormGroup, Label, Row } from "reactstrap";
import { Link } from "@reach/router";
import { Field, reduxForm } from "redux-form";
import Input from "../InputComponent";
const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = ["The username is required"];
  }
  if (!values.password) {
    errors.password = ["The password is required"];
  }
  return errors;
};
class Login extends React.Component {
  render() {
    return (
          <form onSubmit={this.props.handleSubmit}>
            <Label style={{ fontSize: "38px" }}>LOGIN</Label>
            <FormGroup row>
              <Col>
                <Field name="username" placeholder="User name" component={Input}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Field type="password" name="password" placeholder="Password" component={Input}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Row>
                <Col style={{ textAlign: "right" }}>
                  <Label>Forgot your password ?</Label>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "dodgerblue",
                    width: "60%",
                    border: "white 1px solid"
                  }}
                >
                  Log in
                </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Link
                  to="signup"
                  className="btn text-white"
                  style={{
                    backgroundColor: "dodgerblue",
                    width: "60%",
                    border: "white 1px solid"
                  }}
                >
                  Sign up
                </Link>
              </Col>
            </FormGroup>
          </form>
    );
  }
}

export default reduxForm({
  form: "login",
  validate: validate
})(Login);
