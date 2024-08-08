import React, { Component } from "react";

import { Input } from "./Input";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Mikhail",
      password: "",
    };
  }

  handleChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  };

  handleSubmit = () => {
    console.warn(this.state)
  }

  render() {
    return (
      <div>
        <Input
          inputName="login"
          type="text"
          propName="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <Input
          inputName="password"
          type="password"
          propName="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>SUBMIT ME, BEATCH!</button>
      </div>
    );
  }
}
