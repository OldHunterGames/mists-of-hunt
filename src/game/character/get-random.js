// @flow

import { merge } from 'lodash';

import type { Character } from './index';

import getEmpty from './get-empty';
import getRandomTraits from './traits/get-random';

export default (): Character => merge({}, getEmpty(), {
    name: {
        first: 'Random'
    },
    traits: getRandomTraits()
});
