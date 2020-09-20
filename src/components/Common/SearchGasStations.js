import React from 'react';
import ProgressBar from './../Common/ProgressBar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Regions from '../Regions';
import Communes from '../Communes';
import Paper from '@material-ui/core/Paper';

const azulPorDefecto = {
    color: '#043F6C'
}

const iconoBuscar = {
    color: '#043F6C',
    marginTop: '20px'
}

const cssPaper = {
    marginTop: '0px'
}

const SearchGasStations = ({ doneFetchRegions, regions, handleChange, commune, doneGetDomune, validateComune }) => {
    return (
        <Paper className="paper defaultPaper" elevation={3} xs={12} style={cssPaper}>
            <h2 style={azulPorDefecto}>Ingresa datos para tu búsqueda</h2>
            {
                doneFetchRegions ?
                    (<Regions regions={regions} handleChange={handleChange} />)
                    :
                    <ProgressBar />
            }

            <Communes commune={commune} doneGetDomune={doneGetDomune} />

            <IconButton style={iconoBuscar} onClick={e => validateComune(e)}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

SearchGasStations.displayName = 'SearchGasStations';

export default SearchGasStations;