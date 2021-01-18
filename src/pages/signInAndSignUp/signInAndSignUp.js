import React, { Component } from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import "./signInAndSignUp.css";

class SignInAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInAndSignUp;
