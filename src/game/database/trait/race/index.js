// @flow

import parent from '../';

const register = parent.extend('race');

export const HUMAN = register.set({}, 'human');

export const FAY = register.set({
    modifiers: {
        might: -1,
        charm: 1
    }
}, 'fay');

export const FURY = register.set({
    modifiers: {
        might: 1,
        mind: -1
    }
}, 'fury');

export const GHOUL = register.set({
    modifiers: {
        might: 1,
        cunning: 1,
        charm: -2
    }
}, 'ghoul');
