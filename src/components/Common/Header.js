import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import LocalGasStationTwoToneIcon from '@material-ui/icons/LocalGasStationTwoTone';
import logoChile from './../../assets/img/chile.png';

const cssLogo = {
    paddingLeft: 10
}

const Header = () => (
    <AppBar position="sticky">
        <Toolbar >
            <LocalGasStationTwoToneIcon style={{ fontSize: 60 }} />
            &nbsp; &nbsp;
            <h1>Gas Stations Finder App</h1>
            <img src={logoChile} alt="logo chile" width="30" height="30" style={cssLogo}></img>
        </Toolbar>
    </AppBar >
);

Header.displayName = 'Header';

export default Header;