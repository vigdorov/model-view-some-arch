import React from 'react';
import {useSetGlobalStore} from './GlobalStoreContext';

const NAMES = ['Alex', 'Jane', 'Vasiliy'];

export const ChangeUserName = () => {
    const setGlobalState = useSetGlobalStore();

    const handleChangeName = () => {
        const index = Math.round(Math.random() * 2);

        setGlobalState({
            userName: NAMES[index],
        })
    }

    return <div>
        <button onClick={handleChangeName}>change name</button>
    </div>
}