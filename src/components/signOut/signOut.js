import React, { Component } from "react";

class SignOut extends Component {
  componentDidMount() {
    sessionStorage.removeItem("user");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default SignOut;
