import React, { createContext, useState, useEffect } from 'react';
import { trackLyricsGet, trackGet } from '../constants';

export const GasStationsContext = createContext();

const GasStationsContextProvider = ({ children }) => {

    return (
        <GasStationsContext.Provider >
            {children}
        </GasStationsContext.Provider>
    );
}

export default GasStationsContextProvider;