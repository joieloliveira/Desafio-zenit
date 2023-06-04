import React, { createContext, useEffect, useState} from 'react';

//import api from '../config/configApi';

//import Preloading from '../components/Template1/components/Preloading';

type InitContextProps = {
    innerPage: boolean | false;
    setInnerPage: React.Dispatch<React.SetStateAction<boolean | false>>;
    modal: boolean | false;
    setModal: React.Dispatch<React.SetStateAction<boolean | false>>;
}

const ContextMainBody = createContext({} as InitContextProps);

function MainBodyContext({ children }: {children: React.ReactNode}) {

    const [innerPage, setInnerPage] = useState(false);
    const [modal, setModal] = useState(false);
        
    return (
        <ContextMainBody.Provider value={{
            innerPage, setInnerPage,
            modal, setModal,
        }}>
            {children}
        </ContextMainBody.Provider>
    );
}

export { ContextMainBody, MainBodyContext };