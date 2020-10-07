import React from 'react';
import GasStation from './GasStation';

const GasStations = ({ gasStations }) => {
    return (
        gasStations.map((option) => (
            <GasStation key={option.id} data={option} />
        ))
    );
};

GasStations.displayName = 'GasStations';

export default GasStations;