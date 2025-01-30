import React from 'react';
import {AppLifecycleController} from './AppLifecycleService';
import {MainPage} from './MainPage';

export const Root = () => {
    return (
        <AppLifecycleController>
            <MainPage />
        </AppLifecycleController>
    );
};
