import React, {Component} from 'react';

import "./App.css";

export class CalculatorNew extends Component {
    constructor() {
        super()
        this.state = {
            firstValue: '',
            secondValue: '',
            result: null,
        };

    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
        if (this.state.result !== null) {
            this.setState({
                result: null,
            })
        }
    };

    handleSetResult = (event) => {
        const {firstValue, secondValue} = this.state;
        const result = event.target.name === "+" ? 
        Number(firstValue) + Number(secondValue) : 
        Number(firstValue) - Number(secondValue);
        this.setState({result});
    };

    render() {
        const {firstValue, secondValue, result} = this.state;

        return (
            <div className="calculator">
                <div className="inputContainer">
                    <input
                        className="inputCalc"
                        type="number"
                        name="firstValue"
                        value={firstValue}
                        onChange={this.handleInputChange}
                        placeholder="Первое значение"
                    />
                    <input
                        className="inputCalc"
                        type="number"
                        name="secondValue"
                        value={secondValue}
                        onChange={this.handleInputChange}
                        placeholder="Второе значение"
                    />
                </div>
                <div className="buttonContainer">
                    <button name="+" onClick={this.handleSetResult}>+</button>
                    <button name="-" onClick={this.handleSetResult}>-</button>
                </div>
                {result && (
                    <div className="result">{result}</div>
                )}
            </div>
        );
    }
}
