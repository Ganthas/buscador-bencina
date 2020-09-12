import React, { Fragment } from 'react';
import Message from './../Common/Message';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL not Found" />
    </Fragment>
);

NotFound.displayName = 'NotFound';

export default NotFound;