import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.render(
        <App />,
        rootElement
    );
}
