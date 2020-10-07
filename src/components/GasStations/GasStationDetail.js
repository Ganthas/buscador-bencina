import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import ButtonPrimary from '../Common/ButtonPrimary';
import { GasStationDetailContext } from '../../contexts/GasStationDetailContext';
import Message from '../Common/Message';
import ProgressBar from '../Common/ProgressBar';
import moment from 'moment';

const container = {
    marginTop: '50px',
    marginRight: '50px',
    marginLeft: '50px',
    marginBottom: '100px'
}

const style = {
    color: 'gray'
}

const imgStyle = {
    width: '80%',
    maxWidth: '180px'
}

const cssTitle = {
    fontSize: '.75rem',
    textTransform: 'uppercase',
    fontWeight: '500'
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

const cssData = {
    paddingTop: '0px',
    paddingBottom: '0px',
    textAlign: 'left'
}

const cssPrecio = {
    paddingTop: '0px',
    paddingBottom: '0px',
    textAlign: 'center'
}

const cssDiv = {
    paddingTop: '10px'
}

const cssLabel = {
    color: '#043f6c'
}

const cssItemImg = {
    padding: '12px 12px 1px 12px'
}

const cssPrecioContent = {
    padding: '10px',
    textAlign: 'center'
}

const cssMetodosPagoContent = {
    padding: '10px',
    textAlign: 'center'
}

const cssServiciosContent = {
    padding: '10px',
    textAlign: 'center'
}

const GasStationDetail = () => {
    const { doneGetGasStation, gasStation, text } = useContext(GasStationDetailContext);
    return (
        <div style={container}>
            {
                doneGetGasStation ?
                    (gasStation != undefined ?
                        <Grid item xs={12} md={12}>
                            <Paper className="defaultPaper" elevation={3} style={style}>
                                <Grid container justify="center" spacing={3} style={cssTitle}>
                                    <Grid item xs={12} md={4} style={cssItemImg}>
                                        <img src={gasStation.distribuidor.logo_horizontal_svg} style={imgStyle}></img>
                                    </Grid>
                                    <Grid item xs={12} md={8} style={cssData}>
                                        <Grid item xs={12} style={cssData}>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>fecha de actualización de información:</label> {gasStation.fecha_hora_actualizacion}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>razón social:</label> {gasStation.razon_social}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Dirección:</label>
                                                <RoomIcon style={{ fontSize: 10 }} />
                                                {gasStation.direccion_calle} #{gasStation.direccion_numero}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>horario de atención:</label> {gasStation.horario_atencion}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Región:</label> {gasStation.nombre_region}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Comuna:</label> {gasStation.nombre_comuna}
                                            </div>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssPrecioContent}>
                                            <Grid item xs={12} style={cssLabel}>
                                                precios
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                93 ${gasStation.precios['gasolina 93']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                95 ${gasStation.precios['gasolina 95']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                95 ${gasStation.precios['gasolina 97']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                Diesel ${gasStation.precios['petroleo diesel']}
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssMetodosPagoContent}>
                                            <Grid item xs={12} style={cssLabel}>
                                                métodos de pago
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                cheque: {gasStation.metodos_de_pago['cheque'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                efectivo: {gasStation.metodos_de_pago['efectivo'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                tarjetas bancarias: {gasStation.metodos_de_pago['tarjetas bancarias'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                tarjetas grandes tiendas: {gasStation.metodos_de_pago['tarjetas grandes tiendas'] ? 'Si' : 'No'}
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssServiciosContent}>
                                            <Grid item xs={12} style={cssLabel}>
                                                servicios
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                autoservicio: {gasStation.servicios['autoservicio'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                farmacia: {gasStation.servicios['farmacia'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                mantención: {gasStation.servicios['mantencion'] ? 'Si' : 'No'}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                tienda: {gasStation.servicios['tienda'] ? 'Si' : 'No'}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <ButtonPrimary to={`/`} />
                                </Grid>
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
