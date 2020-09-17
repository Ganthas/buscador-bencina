import React from 'react';
import { Toolbar } from '@material-ui/core';
const css = {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    borderRadius: '80px 80px  0 0',
    width: '100%',
    color: 'white',
    align: "center"
}

const Footer = () => (
    <footer style={css} className='footer'>
        <Toolbar>
            <span><small><i>by Josías Sanhueza Gatica</i></small></span>
        </Toolbar>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;