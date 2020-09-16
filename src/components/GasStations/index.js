import React, { Fragment, useContext } from 'react';
import { GasStationsContext } from './../../contexts/GasStationsContext';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';
import GasStation from './GasStation';

const GasStations = ({ gasStations }) => {
    return (
        gasStations.map((option) => (
            <GasStation data={option} />
        ))

    );
};

GasStations.displayName = 'GasStations';

export default GasStations;