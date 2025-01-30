import React, {createContext, useEffect, useState, useContext} from 'react';

export const APP_LIFECYCLE_STATUS = {
    INITIALIZATION: 'INITIALIZATION',
    READY: 'READY',
    DESTROING: 'DESTROING',
};

const AppLifecycleContext = createContext({
    status: APP_LIFECYCLE_STATUS.INITIALIZATION,
});

const requestToBackend = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(['ivan', 'natasha']);
    }, 3000);
});

export const AppLifecycleController = ({children}) => {
    const [state, setState] = useState({
        status: APP_LIFECYCLE_STATUS.INITIALIZATION,
    });

    useEffect(() => {
        console.log('STATUS', state.status);
    }, [state.status]);

    useEffect(() => {
        // initialization
        requestToBackend()
            .then((result) => {
                console.log({result});
            })
            .then(() => {
                setState({status: APP_LIFECYCLE_STATUS.READY}); 
            });

        return () => {
            // destroing
            setState({status: APP_LIFECYCLE_STATUS.DESTROING});
        }
    }, []);

    return (
        <AppLifecycleContext.Provider
            value={state}
        >
            {children}
        </AppLifecycleContext.Provider>
    );
};

export const useAppLifecycleStatus = () => {
    const {status} = useContext(AppLifecycleContext);

    return status;
};