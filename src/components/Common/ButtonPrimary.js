import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const color = {
    backgroundColor: '#043F6C',
    color: 'white'
}

const ButtonPrimary = ({ type, to }) => (
    <Link className="buttonPrimary" to={to}>
        <Button size="small" variant="contained" style={color}>
            {type === 'gasstations' ? <AddIcon style={{ fontSize: 20 }} /> : <ArrowBackIosIcon style={{ fontSize: 20 }} />}
            {type === 'gasstations' ? 'Ver más' : 'Go Back'}
        </Button>
    </Link>
);

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;