import axios from "axios";
import React from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Form from "../form/form";
import "./signUp.css";

class SignUp extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { displayName: "", email: "", password: "", confirmPassword: "" },
    };
  }
  doSubmit = async () => {
    const { data } = this.state;

    // const res = await axios
    //   .get("http://localhost:4000/users")
    //   .then((res) => res.data);
    // const result = res.find((user) => user.email === data.email);
    // if (result) {
    //   alert("user already exist");
    // } else {
    //   axios
    //     .post("http://localhost:4000/users", data)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err.message));
    // }
    if (data.password !== data.confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      const { displayName } = data;
      await createUserProfileDocument(user, { displayName });

      this.setState({
        data: {
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with you email and password</span>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("UserName", "text", "displayName")}
          {this.renderInput("Email", "email", "email")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Confirm Password", "password", "confirmPassword")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default SignUp;
