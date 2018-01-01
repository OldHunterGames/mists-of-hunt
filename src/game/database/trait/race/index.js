// @flow

import register from '../';

export const HUMAN = register({}, 'human');

export const FAY = register({
    modifiers: {
        might: -1,
        charm: 1
    }
}, 'fay');

export const FURY = register({
    modifiers: {
        might: 1,
        mind: -1
    }
}, 'fury');

export const GHOUL = register({
    modifiers: {
        might: 1,
        cunning: 1,
        charm: -2
    }
}, 'ghoul');
