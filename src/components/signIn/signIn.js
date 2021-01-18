import React from "react";
import Form from "../form/form";
import "./signIn.css";

class SignIn extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account </h2>
        <span>Sign In with your Email and Password</span>

        <form>
          {this.renderInput("Email", "email", "email")}
          {this.renderInput("Password", "password", "password")}
          {this.renderButton("Sign In")}
        </form>
      </div>
    );
  }
}

export default SignIn;
