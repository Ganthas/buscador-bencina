import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import ButtonPrimary from './../Common/ButtonPrimary';

const style = {
    height: '220px'
}

const imgStyle = {
    width: '80%'
}

const cssButtonPrimary = {
    float: 'left'
}

const Details = ({ data }) => {
    const { id, distribuidor, precios, direccion_calle, direccion_numero } = data;
    return (
        <Grid item xs={3} sm={3}>
            <Paper className="defaultPaper" elevation={3} style={style}>
                <img src={distribuidor.logo_horizontal_svg} style={imgStyle}></img>
                <br></br>
                <small>
                    <RoomIcon style={{ fontSize: 20 }} />
                    {direccion_calle} #{direccion_numero}
                </small>
                <ul className='liul'>
                    <li>
                        <small>
                            <span>
                                <strong>Gasolina 93</strong>: ${precios['gasolina 93']}
                            </span>
                        </small>
                    </li>
                    <li>
                        <small>
                            <span>
                                <strong>Gasolina 95</strong>: ${precios['gasolina 95']}
                            </span>
                        </small>
                    </li>
                    <li>
                        <small>
                            <span>
                                <strong>Gasolina 97</strong>: ${precios['gasolina 97']}
                            </span>
                        </small>
                    </li>
                    <li>
                        <small>
                            <span>
                                <strong>Petróleo diesel</strong>: ${precios['petroleo diesel']}
                            </span>
                        </small>
                    </li>
                </ul>
                <ButtonPrimary type="gasstations" to={`/gasstation/${id}`} style={cssButtonPrimary} />
            </Paper>
        </Grid>
    )
}

Details.displayName = 'Details';

export default Details;
