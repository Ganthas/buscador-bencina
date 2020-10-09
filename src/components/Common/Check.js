import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const cssCheck = {
    color: 'green',
    fontSize: '15px'
}

const cssCancel = {
    color: 'red',
    fontSize: '15px'
}

const Check = ({ condicion }) => (
    condicion ? <CheckCircleIcon style={cssCheck} /> : <CancelIcon style={cssCancel} />
);

Check.displayName = 'Check';

export default Check;

