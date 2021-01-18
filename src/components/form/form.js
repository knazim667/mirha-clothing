import React, { Component } from "react";
import Button from "../button/button";
import Input from "./input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;

    const data = { ...this.state.data };

    data[key] = value;

    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    this.doSubmit();
  };

  renderInput = (label, type = "text", name) => {
    return (
      <Input
        label={label}
        name={name}
        type={type}
        value={this.state.data[name]}
        onChange={this.handleChange}
      />
    );
  };
  renderButton = (title, type = "submit") => {
    return <Button title={title} type={type} />;
  };
}

export default Form;
