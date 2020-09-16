import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const style = {
    height: '200px'
}

const Details = ({ data }) => {
    const { distribuidor } = data;
    return (
        <Grid item xs={3} sm={3}>
            <Paper className="defaultPaper" elevation={3} style={style}>
                <img src={distribuidor.logo} width='100'></img>
                <h3>{distribuidor.nombre}</h3>
                {/* <ul>
                <li>
                    <img alt="track" src={track} />
                    <strong>Track: </strong>
                    <span>{track_name}</span>
                </li>
                <li>
                    <img alt="album" src={album} />
                    <strong>Album: </strong>
                    <span>{album_name}</span>
                </li>
            </ul> */}
            </Paper>
        </Grid>
    )
}

Details.displayName = 'Details';

export default Details;
