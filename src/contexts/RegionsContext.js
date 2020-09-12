import React, { createContext, useState, useEffect } from 'react';
import { regionsGetAll } from '../constants';

export const RegionsContext = createContext();

const RegionsContextProvider = ({ children }) => {

    const [doneFetchRegions, setDoneFetchRegions] = useState(false);
    const [regions, setRegions] = useState([]);

    useEffect(() => getRegions(), []);

    const getRegions = () => {
        fetch(regionsGetAll())
            .then(res => res.json())
            .then(res => {
                const { data } = res;
                setDoneFetchRegions(true);
                !Array.isArray(data) && setRegions(data);
            })
            .catch(err => console.log(err));
    };

    return (
        <RegionsContext.Provider value={{ doneFetchRegions, regions }}>
            {children}
        </RegionsContext.Provider>
    );
}

export default RegionsContextProvider;