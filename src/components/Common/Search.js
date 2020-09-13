import React, { Fragment, useContext } from 'react';
import { RegionsContext } from './../../contexts/RegionsContext';
import { CommunesContext } from './../../contexts/CommunesContext';
import { GasStationsContext } from './../../contexts/GasStationsContext';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { MenuItem } from '@material-ui/core';
import ProgressBar from './../Common/ProgressBar';
import Grid from '@material-ui/core/Grid';

const cssH2 = {
    color: '#043F6C'
}

const Search = () => {
    const { doneFetchRegions, regions } = useContext(RegionsContext);
    const { doneGetDomune, commune, getComune } = useContext(CommunesContext);
    const { doneGetGasStations, gasStations, validateComune } = useContext(GasStationsContext);

    function handleChange(e) {
        getComune(e.target.value)
    };

    return (
        <Grid container spacing={6} style={{ marginLeft: '50px' }}>
            <Grid
                item
                xs={3}
            >
                <Paper className="paper defaultPaper" elevation={3}>
                    <h2 style={cssH2}>Ingresa datos para tu búsqueda</h2>
                    {
                        doneFetchRegions ?
                            (<TextField select label="Region" onChange={handleChange}>
                                {regions.map((option) => (
                                    <MenuItem key={option.cod_region} value={option.cod_region}>
                                        {option.cod_region} - {option.nom_region}
                                    </MenuItem>
                                ))}
                            </TextField>)
                            :
                            <ProgressBar />
                    }
                    {
                        <TextField select label="Comuna" disabled={!doneGetDomune} id="id_comuna">
                            {commune.map((option) => (
                                <MenuItem key={option.cod_comuna} value={option.cod_comuna}>
                                    {option.nom_comuna}
                                </MenuItem>
                            ))}
                        </TextField>
                    }
                    <IconButton onClick={e => validateComune(e)}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>

            <Grid
                item
                xs={9}
            >
                {gasStations.map((option) => (
                    <li>{option.distribuidor.nombre} | <img src={option.distribuidor.logo} width='100'></img> </li>
                ))}
            </Grid>
        </Grid >
    )
};

Search.displayName = 'Search';

export default Search;