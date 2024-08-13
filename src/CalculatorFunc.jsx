import React, {useState} from 'react';

import "./App.css";

export const CalculatorFunc = () => {
    const [state, setState] =
        useState({
            firstValue: '',
            secondValue: '',
            result: null,
        });


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setState((state) => {
            return {
                ...state,
                [name]: value,
                result: null,
            }
        })
    };

    const handleSum = () => {
        const sum = Number(state.firstValue) + Number(state.secondValue);
        setState((state) => {
            return {
                ...state,
                result: sum,
            }
        });
    }

    const handleDifference = () => {
        const diff = Number(state.firstValue) - Number(state.secondValue);
        setState((state) => {
            return {
                ...state,
                result: diff,
            }
        });
    }

    return (
        <div className="calculator">
            <div className="inputContainer">
                <input
                    className="inputCalc"
                    type="number"
                    name="firstValue"
                    value={state.firstValue}
                    onChange={handleInputChange}
                    placeholder="Первое значение"
                />
                <input
                    className="inputCalc"
                    type="number"
                    name="secondValue"
                    value={state.secondValue}
                    onChange={handleInputChange}
                    placeholder="Второе значение"
                />
            </div>
            <div className="buttonContainer">
                <button onClick={handleSum}>+</button>
                <button onClick={handleDifference}>-</button>
            </div>
            {state.result && (
                <div className="result">{state.result}</div>
            )}
        </div>
    );
};
