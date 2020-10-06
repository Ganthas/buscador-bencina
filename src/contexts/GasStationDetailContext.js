import React, { createContext, useState, useEffect } from 'react';
import { gasStationsGet } from '../constants';

export const GasStationDetailContext = createContext();

const GasStationDetailContextProvider = ({ children }) => {

    const [doneGetGasStation, setDoneGetGasStation] = useState(true);
    const [gasStation, setGasStation] = useState(undefined);
    const [text, setText] = useState('');

    useEffect(() => getGasStation(), []);

    const getGasStation = () => {
        const gasstation_id = window.location.pathname.split('/')[2];
        const commune_nro = window.location.pathname.split('/')[3];
        setDoneGetGasStation(false);
        fetch(gasStationsGet(commune_nro))
            .then(res => res.json())
            .then(res => {
                const { data } = res;
                const gasstation = data.filter(data => data.id == gasstation_id);
                setDoneGetGasStation(true);
                setText(gasstation.length ? 'Results' : 'No Results');
                setGasStation(gasstation[0]);
            })
            .catch(err => console.log(err));
    };


    return (
        <GasStationDetailContext.Provider value={{ doneGetGasStation, gasStation, text, getGasStation }}>
            {children}
        </GasStationDetailContext.Provider>
    );
}

export default GasStationDetailContextProvider;