import React from 'react';
import {APP_LIFECYCLE_STATUS, useAppLifecycleStatus} from './AppLifecycleService';

export const MainPage = () => {
    const status = useAppLifecycleStatus();

    return (
        <>
            {status === APP_LIFECYCLE_STATUS.INITIALIZATION && <div style={{backgroundColor: 'red'}}>LOADING...</div>}
            {status === APP_LIFECYCLE_STATUS.READY && <div>Hello, my friend!</div>}
        </>
    );
};
