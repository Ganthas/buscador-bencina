import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';

const marginTop = {
    marginTop: '20px'
}

const Communes = ({ commune, doneGetDomune }) => {
    return (
        <TextField style={marginTop} select label="Comuna" disabled={!doneGetDomune} id="id_comuna">
            {commune.map((option) => (
                <MenuItem key={option.cod_comuna} value={option.cod_comuna}>
                    {option.nom_comuna}
                </MenuItem>
            ))}
        </TextField>
    );
};

Communes.displayName = 'Communes';

export default Communes;