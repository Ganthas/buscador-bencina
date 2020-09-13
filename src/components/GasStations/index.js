import React, { Fragment, useContext } from 'react';
import { GasStationsContext } from './../../contexts/GasStationsContext';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';
import Details from './Details';

const GasStations = () => {
    const { doneGetGasStations, gasStations, validateComune } = useContext(GasStationsContext);
    return (
        <Fragment>
            {
                doneGetGasStations ?
                    (!Array.isArray(gasStations) && !Array.isArray(gasStations) ?
                        <Details gasStations={gasStations} />
                        :
                        <Message text="No Results" />)
                    :
                    <ProgressBar />
            }
        </Fragment>
    );
};

GasStations.displayName = 'GasStations';

export default GasStations;