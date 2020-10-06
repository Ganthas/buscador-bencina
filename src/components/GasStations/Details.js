import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import ButtonPrimary from './../Common/ButtonPrimary';
import { GasStationDetailContext } from './../../contexts/GasStationDetailContext';
import Message from './../Common/Message';
import ProgressBar from './../Common/ProgressBar';

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

const GasStationDetail = () => {
    const { doneGetGasStation, gasStation, text } = useContext(GasStationDetailContext);
    return (
        <div>
            {
                doneGetGasStation ?
                    (gasStation != undefined ?
                        <Grid item xs={12} md={3}>
                            <Paper className="defaultPaper" elevation={3} style={style}>
                                <Grid container justify="center" spacing={3} style={cssTitle}>
                                    <Grid item style={cssItemImg}>
                                        <img src={gasStation.distribuidor.logo_horizontal_svg} style={imgStyle}></img>
                                    </Grid>
                                    <Grid item style={cssDireccion}>
                                        <span style={cssSpan}>
                                            <RoomIcon style={{ fontSize: 10 }} />
                                            {gasStation.direccion_calle} #{gasStation.direccion_numero}
                                        </span>
                                    </Grid>
                                </Grid>

                                <ButtonPrimary to={`/`} />

                            </Paper>
                        </Grid > :
                        <div>
                            <Message text={text} />
                            <ButtonPrimary to={`/`} />
                        </div>
                    )
                    :
                    <ProgressBar />
            }
        </div>
    )
}

GasStationDetail.displayName = 'GasStationDetail';

export default GasStationDetail;
