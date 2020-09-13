import React, { Fragment, useContext } from 'react';
import { RegionsContext } from './../../contexts/RegionsContext';
import { CommunesContext } from './../../contexts/CommunesContext';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { MenuItem } from '@material-ui/core';
import ProgressBar from './../Common/ProgressBar';

const Search = () => {
    const { doneFetchRegions, regions } = useContext(RegionsContext);
    const { doneGetDomune, commune, getComune } = useContext(CommunesContext);

    function handleChange(e) {
        getComune(e.target.value)
    };

    return (
        <Paper className="paper defaultPaper">
            <form noValidate autoComplete="off">
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
                    doneGetDomune && <TextField select label="Commune">
                        {commune.map((option) => (
                            <MenuItem key={option.cod_comuna} value={option.cod_comuna}>
                                {option.nom_comuna}
                            </MenuItem>
                        ))}
                    </TextField>
                }

                <IconButton>
                    <SearchIcon />
                </IconButton>
            </form>
        </Paper>
    )
};

Search.displayName = 'Search';

export default Search;