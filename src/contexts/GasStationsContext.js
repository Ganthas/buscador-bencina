import React, { createContext, useState, useEffect } from 'react';
import { gasStationsGet } from '../constants';

export const GasStationsContext = createContext();

const GasStationsContextProvider = ({ children }) => {

    const [doneGetGasStations, setDoneGetDomune] = useState(true);
    const [gasStations, setGasStations] = useState([]);
    const [text, setText] = useState('');

    const getGasStations = commune_nro => {
        setDoneGetDomune(false);
        fetch(gasStationsGet(commune_nro))
            .then(res => res.json())
            .then(res => {
                const { data } = res;
                setDoneGetDomune(true);
                setText(data.length ? 'Results' : 'No Results');
                setGasStations(data);
            })
            .catch(err => console.log(err));
    };

    const validateComune = (e, commune_nro = document.getElementsByClassName('MuiSelect-nativeInput')[1].value.toLowerCase().trim()) => {
        if (e.type === 'keypress' && e.key !== 'Enter') return;
        if (commune_nro && commune_nro !== "") {
            getGasStations(commune_nro);
        }
    }

    return (
        <GasStationsContext.Provider value={{ doneGetGasStations, gasStations, validateComune, text }}>
            {children}
        </GasStationsContext.Provider>
    );
}

export default GasStationsContextProvider;