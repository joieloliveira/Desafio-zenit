import React, { createContext, useEffect, useState} from 'react';

//import api from '../config/configApi';

//import Preloading from '../components/Template1/components/Preloading';

type InitContextProps = {
    offCanvas: boolean | false;
    setOffCanvas: React.Dispatch<React.SetStateAction<boolean | false>>;
}

const ContextHeadeBar = createContext({} as InitContextProps);

function HeadeBarProvider({ children }: {children: React.ReactNode}) {

    const [offCanvas, setOffCanvas] = useState(false);
    const [modal, setModal] = useState(false);
    const [bodyModal, setBodyModal] = useState('');
        
    return (
        <ContextHeadeBar.Provider value={{
            offCanvas, setOffCanvas,
        }}>
            {children}
        </ContextHeadeBar.Provider>
    );
}

export { ContextHeadeBar, HeadeBarProvider };