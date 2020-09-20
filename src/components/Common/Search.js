import React, { Fragment, useContext } from 'react';
import { RegionsContext } from './../../contexts/RegionsContext';
import { CommunesContext } from './../../contexts/CommunesContext';
import { GasStationsContext } from './../../contexts/GasStationsContext';
import Grid from '@material-ui/core/Grid';
import SearchGasStations from '../Common/SearchGasStations';
import GasStations from '../GasStations';
import Message from './../Common/Message';
import ProgressBar from './../Common/ProgressBar';

const container = {
    marginTop: '50px',
    marginRight: '50px',
    marginLeft: '50px',
    marginBottom: '100px'
}

const Search = () => {
    const { doneFetchRegions, regions } = useContext(RegionsContext);
    const { doneGetDomune, commune, getComune } = useContext(CommunesContext);
    const { doneGetGasStations, gasStations, validateComune, text } = useContext(GasStationsContext);

    function handleChange(e) {
        getComune(e.target.value)
    };

    return (
        <div style={container}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={3}>
                    <SearchGasStations doneFetchRegions={doneFetchRegions} regions={regions} handleChange={handleChange} commune={commune} doneGetDomune={doneGetDomune} validateComune={validateComune} />
                </Grid >
                <Grid item xs={12} md={9}>
                    <Grid container spacing={3}>
                        {
                            doneGetGasStations ?
                                (gasStations.length ? <GasStations gasStations={gasStations} /> : <Message text={text} />)
                                :
                                <ProgressBar />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

Search.displayName = 'Search';

export default Search;