import React from 'react';
import { Toolbar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const css = {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    borderRadius: '80px 80px  0 0',
    width: '100%',
    color: 'white',
    align: "center",
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}


const Footer = () => (
    <footer style={css} className='footer'>
        <label>
            <small>
                <i>
                    2020 - Josías Sanhueza Gatica
                </i>
            </small>
        </label>
        <label className='textoFooter'>
            <small>
                <i>
                    <SentimentVerySatisfiedIcon style={{ fontSize: 20 }} />
                </i>
            </small>
        </label>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;