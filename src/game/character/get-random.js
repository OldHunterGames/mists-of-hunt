// @flow

import { merge } from 'lodash';

import type { Character } from './index';

import getEmpty from './get-empty';

export default (): Character => merge({}, getEmpty(), {
    name: {
        first: 'Random'
    }
});
