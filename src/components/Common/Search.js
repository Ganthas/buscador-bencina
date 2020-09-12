import React, { Fragment, useContext } from 'react';
import { RegionsContext } from './../../contexts/RegionsContext';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { MenuItem } from '@material-ui/core';

const Search = () => {
    const { doneFetchRegions, regions } = useContext(RegionsContext);
    console.log(regions)
    return (
        <Paper className="paper defaultPaper">
            <form noValidate autoComplete="off">
                <TextField select label="Region">
                    {regions.map((option) => (
                        <MenuItem key={option.cod_region} value={option.cod_region}>
                            {option.nom_region}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField select label="Commune">
                    {/* {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))} */}
                </TextField>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </form>
        </Paper>
    )
};

Search.displayName = 'Search';

export default Search;