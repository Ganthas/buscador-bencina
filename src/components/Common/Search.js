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
    marginLeft: '70px'
}

const Search = () => {
    const { doneFetchRegions, regions } = useContext(RegionsContext);
    const { doneGetDomune, commune, getComune } = useContext(CommunesContext);
    const { doneGetGasStations, gasStations, validateComune } = useContext(GasStationsContext);

    function handleChange(e) {
        getComune(e.target.value)
    };

    return (
        <div style={container}>
            <Grid container spacing={6}>
                <Grid item xs={3}>
                    <Grid container spacing={6}>
                        <Grid>
                            <SearchGasStations doneFetchRegions={doneFetchRegions} regions={regions} handleChange={handleChange} commune={commune} doneGetDomune={doneGetDomune} validateComune={validateComune} />
                        </Grid>
                    </Grid >
                </Grid >
                <Grid item xs={9}>
                    <Grid container spacing={3}>
                        {
                            doneGetGasStations ?
                                (gasStations.length ? <GasStations gasStations={gasStations} /> : <Message text="resultados" />)
                                :
                                (doneGetGasStations ? <ProgressBar /> : <div>holi</div>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

Search.displayName = 'Search';

export default Search;