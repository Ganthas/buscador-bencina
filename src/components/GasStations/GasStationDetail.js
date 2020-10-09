import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import ButtonPrimary from '../Common/ButtonPrimary';
import Check from '../Common/Check';
import { GasStationDetailContext } from '../../contexts/GasStationDetailContext';
import Message from '../Common/Message';
import ProgressBar from '../Common/ProgressBar';
import Map from '../Common/Map';
import moment from 'moment';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';

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

const cssIcons = {
    fontSize: '1rem'
}

const cssData = {
    paddingTop: '0px',
    paddingBottom: '0px',
    textAlign: 'left'
}

const cssPrecio = {
    paddingTop: '10px',
    paddingBottom: '0px',
    textAlign: 'center'
}

const cssDiv = {
    paddingTop: '10px'
}

const cssLabel = {
    color: '#043f6c'
}

const cssSecciones = {
    color: '#043f6c',
    padding: '10px',
    backgroundColor: '#BDE2FF'
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
                                        <Map ubicacion={gasStation.ubicacion} />
                                    </Grid>
                                    <Grid item xs={12} md={8} style={cssData}>
                                        <Grid item xs={12} style={cssData}>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>fecha de actualización de información:</label>
                                                {moment(gasStation.fecha_hora_actualizacion).format("MMMM Do YYYY, h:mm:ss")}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>razón social:</label>
                                                {gasStation.razon_social}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Dirección:</label>
                                                <RoomIcon style={{ fontSize: 10 }} />
                                                {gasStation.direccion_calle} #{gasStation.direccion_numero}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>horario de atención:</label>
                                                {gasStation.horario_atencion}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Región:</label>
                                                {gasStation.nombre_region}
                                            </div>
                                            <div style={cssDiv}>
                                                <label style={cssLabel}>Comuna:</label>
                                                {gasStation.nombre_comuna}
                                            </div>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssPrecioContent}>
                                            <Grid item xs={12} style={cssSecciones}>
                                                precios <LocalGasStationIcon style={cssIcons} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>93:</label> ${gasStation.precios['gasolina 93']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>95:</label> ${gasStation.precios['gasolina 95']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>97:</label> ${gasStation.precios['gasolina 97']}
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>Diesel:</label> ${gasStation.precios['petroleo diesel']}
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssMetodosPagoContent}>
                                            <Grid item xs={12} style={cssSecciones}>
                                                métodos de pago <PaymentIcon style={cssIcons} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>Cheque:</label> <Check condicion={gasStation.metodos_de_pago['cheque']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>Efectivo:</label> <Check condicion={gasStation.metodos_de_pago['efectivo']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>Tarjetas bancarias:</label> <Check condicion={gasStation.metodos_de_pago['tarjetas bancarias']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>tarjetas grandes tiendas:</label> <Check condicion={gasStation.metodos_de_pago['tarjetas grandes tiendas']} />
                                            </Grid>
                                        </Grid>
                                        <Grid container justify="center" xs={12} style={cssServiciosContent}>
                                            <Grid item xs={12} style={cssSecciones}>
                                                servicios <ShoppingCartIcon style={cssIcons} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>autoservicio:</label> <Check condicion={gasStation.servicios['autoservicio']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>farmacia:</label> <Check condicion={gasStation.servicios['farmacia']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>mantención:</label> <Check condicion={gasStation.servicios['mantencion']} />
                                            </Grid>
                                            <Grid item xs={12} md={3} style={cssPrecio}>
                                                <label style={cssLabel}>tienda:</label> <Check condicion={gasStation.servicios['tienda']} />
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
