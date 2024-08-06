import React, {Component} from 'react';

import './App.css';

export class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        };

        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
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

    render() {
        const {counter} = this.state;

        return (
            <div className="container">
                <div>{counter}</div>
                <button onClick={this.handleIncrease}>plus</button>
                <button onClick={this.handleDecrease}>minus</button>
            </div>
        );
    }
}