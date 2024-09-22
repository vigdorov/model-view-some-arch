import React from 'react';

import {useGlobalStore} from './GlobalStoreContext';

export const UserName = () => {
    const {userName} = useGlobalStore();

    return <div style={{border: '1px solid grey'}}>{userName}</div>;
};
