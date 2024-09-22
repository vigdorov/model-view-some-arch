import React, {createContext, useContext, useState} from 'react';

export const GlobalStoreContext = createContext();

export const GlobalStoreController = ({children}) => {
    const [state, setState] = useState({
        userName: 'Vasiliy',
    });

    return (
        <GlobalStoreContext.Provider
            value={{
                state,
                setState,
            }}
        >
            {children}
        </GlobalStoreContext.Provider>
    );
};

export const useGlobalStore = () => {
    const {state} = useContext(GlobalStoreContext);

    return state;
};

export const useSetGlobalStore = () => {
    const {setState} = useContext(GlobalStoreContext);

    return setState;
};
