import React, { Component } from "react";
import { MyContext } from "../../MyContext";
import "./style.css";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userPassword: ""
    };
  }

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value, event: event });
  };

  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const { currentUser, logIn, logOut } = value;
          return currentUser ? (
            <span style={{ paddingRight: "10px" }}>
              <span className="loggedInUser">Logged in as, {currentUser}</span>
              <button className="btn" id="loginButton" onClick={logOut}>
                Log Out <i class="fas fa-sign-out-alt" />
              </button>
            </span>
          ) : (
            <div style={{ width: "550px" }}>
              <form>
                <input
                  className="form-control"
                  style={{ float: "left", width: "200px", margin: "10px 0" }}
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                  name="userName"
                  placeholder="Username"
                />
                <input
                  className="form-control"
                  style={{
                    float: "left",
                    width: "200px",
                    margin: "10px 2.5px"
                  }}
                  value={this.state.userPassword}
                  onChange={this.handleInputChange}
                  name="userPassword"
                  placeholder="Password"
                  type="password"
                />
              </form>
              <button
                className="btn"
                id="loginButton"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginTop: "10px"
                }}
                disabled={!this.state.userName || !this.state.userPassword}
                onClick={() => {
                  logIn(this.state.userName, this.state.userPassword);
                }}
              ><Link to="/getQuestions">Log In <i class="fas fa-arrow-alt-circle-right" /></Link>
              </button>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default LoginForm;
