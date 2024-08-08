import React, {useState, useEffect} from 'react';

export const TimerFunc = () => {
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(null);

    const handleIncrease = () => {
        setCounter(state => state + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('ololo', counter)
            handleIncrease();
        }, 1000);

        setTimer(interval);
    }, []);

    useEffect(() => {
        console.log('did update', counter)
    }, [counter]);

    useEffect(() => {
        return () => {
            clearInterval(timer);
        };
    }, [timer]);

    return (
        <div>
            <div>Counter: {counter}</div>
            <div>Start</div>
        </div>
    );
}