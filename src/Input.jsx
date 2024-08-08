import React, { Component } from "react";

export class Input extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("props", this.props);
  }
  render() {
    return (
      <div>
        <div>{this.props.inputName}</div>
        <input
          type={this.props.type}
          value={this.props.value}
          onChange={(event) =>
            this.props.onChange(this.props.propName, event.target.value)
          }
        />
      </div>
    );
  }
}
