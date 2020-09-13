import React, { createContext, useState, useEffect } from 'react';
import { communeGet } from '../constants';

export const CommunesContext = createContext();

const CommunesContextProvider = ({ children }) => {

    const [doneGetDomune, setDoneGetDomune] = useState(false);
    const [commune, setCommune] = useState([]);

    const getComune = region_nro => {
        fetch(communeGet(region_nro))
            .then(res => res.json())
            .then(res => {
                const { data } = res;
                setDoneGetDomune(true);
                setCommune(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <CommunesContext.Provider value={{ doneGetDomune, commune, getComune }}>
            {children}
        </CommunesContext.Provider>
    );
}

export default CommunesContextProvider;