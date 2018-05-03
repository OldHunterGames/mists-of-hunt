// @flow

import * as React from 'react';
import { Router } from 'react-router';

import history from './browser-history';

type Props = {
    history?: void
};

export default (props: Props) => (
    <Router {...props} history={history} />
);
