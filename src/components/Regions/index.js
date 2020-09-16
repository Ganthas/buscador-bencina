import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';

const marginTop = {
    marginTop: '20px'
}

const Regions = ({ regions, handleChange }) => {
    return (
        <TextField style={marginTop} select label="Region" onChange={handleChange}>
            {regions.map((option) => (
                <MenuItem key={option.cod_region} value={option.cod_region}>
                    {option.cod_region} - {option.nom_region}
                </MenuItem>
            ))}
        </TextField>
    );
};

Regions.displayName = 'Regions';

export default Regions;