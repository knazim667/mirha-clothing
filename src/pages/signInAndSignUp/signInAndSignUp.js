import React, { Component } from "react";
import SignIn from "../../components/signIn/signIn";

class SignInAndSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
      </div>
    );
  }
}

export default SignInAndSignUp;
