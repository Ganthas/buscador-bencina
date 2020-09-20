import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import ButtonPrimary from './../Common/ButtonPrimary';

const style = {
    height: '234px',
    color: 'gray'
}

const imgStyle = {
    width: '80%',
    maxWidth: '180px'
}

const cssButtonPrimary = {
    float: 'left'
}

const cssTitle = {
    fontSize: '.75rem',
    textTransform: 'uppercase',
    fontWeight: '500'
}

const cssContent = {
    marginTop: '15px',
    fontSize: '.75rem',
    marginBottom: '-16px'
}

const cssContent93 = {
    borderTop: '1px #dddddd solid',
}

const cssContent95 = {
    border: '1px #dddddd solid',
}

const cssContent97 = {
    borderTop: '1px #dddddd solid',
}

const cssContentDiesel = {
    marginTop: '15px',
    marginBottom: '-8px',
    borderTop: '1px #dddddd solid',
    borderBottom: '1px #dddddd solid',
    fontSize: '.75rem'
}

const cssDireccion = {
    paddingTop: '0px',
    paddingBottom: '0px'
}

const cssSpan = {
    height: '50px',
    display: 'table-cell',
    verticalAlign: 'middle'
}

const cssItemImg = {
    padding: '12px 12px 1px 12px'
}

const Details = ({ data }) => {
    const { id, distribuidor, precios, direccion_calle, direccion_numero } = data;
    return (
        <Grid item xs={12} md={3}>
            <Paper className="defaultPaper" elevation={3} style={style}>
                <Grid container justify="center" spacing={3} style={cssTitle}>
                    <Grid item style={cssItemImg}>
                        test
                        <img src={distribuidor.logo_horizontal_svg} style={imgStyle}></img>
                    </Grid>
                    <Grid item style={cssDireccion}>
                        <span style={cssSpan}>
                            <RoomIcon style={{ fontSize: 10 }} />
                            {direccion_calle} #{direccion_numero}
                        </span>
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={3} style={cssContent}>
                    <Grid item xs={4} sm={4} style={cssContent93}>
                        <strong>93</strong>
                        <br></br>
                        ${precios['gasolina 93']}
                    </Grid>
                    <Grid item xs={4} sm={4} style={cssContent95}>
                        <strong>95</strong>
                        <br></br>
                        ${precios['gasolina 95']}
                    </Grid>
                    <Grid item xs={4} sm={4} style={cssContent97}>
                        <strong>97</strong>
                        <br></br>
                        ${precios['gasolina 97']}
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={3} style={cssContentDiesel}>
                    <Grid item xs={4} sm={4}>
                        <strong>Diesel</strong> ${precios['petroleo diesel']}
                    </Grid>
                </Grid>

                <ButtonPrimary type="gasstations" to={`/gasstation/${id}`} style={cssButtonPrimary} />
            </Paper>
        </Grid >
    )
}

Details.displayName = 'Details';

export default Details;
