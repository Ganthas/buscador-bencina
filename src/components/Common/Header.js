import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import LocalGasStationTwoToneIcon from '@material-ui/icons/LocalGasStationTwoTone';
import logoChile from './../../assets/img/chile.png';

const cssLogo = {
    paddingLeft: 10
}

const cssAppBar = {
    borderRadius: '0 0 80px 80px',
    height: '150px'
}

const cssCNE = {
    color: 'grey'
}

const Header = () => (
    <AppBar position="sticky" style={cssAppBar} className='header'>
        <Toolbar >
            <LocalGasStationTwoToneIcon style={{ fontSize: 60 }} className='iconoGasStation' />
            &nbsp; &nbsp;
            <h1>Gas Stations Finder App</h1>
            <img src={logoChile} alt="logo chile" width="30" className='iconoChile' style={cssLogo}></img>
        </Toolbar>
        <Toolbar>
            <span className='textoHeader'><small><i>Buscador de gasolineras, datos extraidos de la <a href="https://api.cne.cl/apidocs/#api-_" target='_blank' style={cssCNE}>Comisión nacional de energía</a></i></small></span>
        </Toolbar>
    </AppBar >
);

Header.displayName = 'Header';

export default Header;