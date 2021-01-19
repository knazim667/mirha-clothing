import axios from "axios";
import React from "react";
import Button from "../button/button";
import Form from "../form/form";
import "./signIn.css";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

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
  doSubmit = async () => {
    const { data } = this.state;
    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        data: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have account </h2>
        <span>Sign In with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Email", "email", "email")}
          {this.renderInput("Password", "password", "password")}
          <div className="buttons">
            {this.renderButton("Sign In")}
            <Button
              isGoogleSignIn
              onClick={signInWithGoogle}
              title={"Sign with Google"}
              type="button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
