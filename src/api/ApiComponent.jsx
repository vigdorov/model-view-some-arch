import React, {useEffect, useState} from 'react';
import {getSimpleData} from './_simple';

export const ApiRoot = () => {
    const [state, setState] = useState({
        users: [],
        logoColor: '',
    });

    useEffect(() => {
        getSimpleData().then(data => {
            setState(data);
        });
    }, []);

    return (
        <div>
            <h1>Api Root</h1>
            <h2>Users:</h2>
            <p>
                {state.users.map(userName => {
                    return <div>{userName}</div>;
                })}
            </p>
            <h2>Logo color:</h2>
            <div
                style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: state.logoColor,
                }}
            />
        </div>
    );
};
