import React, { Component } from "react";

import "./App.css";
import { Timer } from "./Timer";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      isTimer: true,
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleShowTimer = this.handleShowTimer.bind(this);
  }

  handleIncrease() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleDecrease() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  handleShowTimer() {
    this.setState((state) => ({
      isTimer: !state.isTimer,
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div className="container">
          <div>{counter}</div>
          <button onClick={this.handleIncrease}>plus</button>
          <button onClick={this.handleDecrease}>minus</button>
        </div>
        {this.state.isTimer && (
          <>
            <div> Timer:</div>
            <Timer />
          </>
        )}
        <button onClick={this.handleShowTimer}>CLICK ME, BITCH!!</button>
      </div>
    );
  }
}
