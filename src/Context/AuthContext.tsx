import React, { createContext, useEffect, useState} from 'react';

//import api from '../config/configApi';

//import Preloading from '../components/Template1/components/Preloading';

type InitContextProps = {
    authenticated: boolean | false;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean | false>>;
    signUp: VoidFunction
    handleLogin: VoidFunction
    handleLogout: VoidFunction
}

const ContextAuth = createContext({} as InitContextProps);

function AuthProvider({ children }: {children: React.ReactNode}) {

    const [authenticated, setAuthenticated] = useState(false);

    function signUp() {
        setAuthenticated(true);
    }

    function handleLogin() {
        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);
    }

    return (
        <ContextAuth.Provider value={{
            authenticated, setAuthenticated,
            signUp, handleLogin, handleLogout,
        }}>
            {children}
        </ContextAuth.Provider>
    );
}

export { ContextAuth, AuthProvider };