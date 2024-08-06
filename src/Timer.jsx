import React, { Component } from "react";

let i = 0;
export class Timer extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  handleIncrease() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  componentDidMount() {
    this.timer = setInterval(() => {
        console.log('ololo', this.state)
      this.handleIncrease();
    }, 1000);
  }

  componentDidCatch (error) {

  }

  componentDidUpdate() {
    console.log('did update', this.state)
  }

  shouldComponentUpdate() {
    return (this.state.counter % 2);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <div>Start</div>
      </div>
    );
  }
}
