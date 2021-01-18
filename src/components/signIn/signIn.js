import axios from "axios";
import React from "react";
import Button from "../button/button";
import Form from "../form/form";
import "./signIn.css";

import { signInWithGoogle } from "../firebase/firebase.utils";

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
  doSubmit = () => {
    const { data } = this.state;
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        let value = res.data;
        let result = value.find(
          (val) => val.email === data.email && val.password === data.password
        );
        if (!result) {
          console.log("Please use valid email id");
        } else {
          sessionStorage.setItem("user", result.id);
          window.location = "/shop";
        }
      })
      .catch((err) => err.message);
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
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
