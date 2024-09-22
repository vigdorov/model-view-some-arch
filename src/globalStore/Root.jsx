import React from 'react';
import {GlobalStoreController} from './GlobalStoreContext';
import {UserName} from './UserName';
import {ChangeUserName} from './ChangeUserName';

export const Root = () => {
    return (
        <GlobalStoreController>
            <div>Some App</div>
            <UserName />
            <ChangeUserName />
        </GlobalStoreController>
    )
}