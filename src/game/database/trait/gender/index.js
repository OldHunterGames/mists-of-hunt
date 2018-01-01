// @flow

import register from '../';

export const MALE = register({
    modifiers: {
        might: 1,
        charm: -1
    }
}, 'male');

export const FEMALE = register({
    modifiers: {
        might: -1,
        charm: 1
    }
}, 'female');

export const FUTANARI = register({
    modifiers: {
        mind: -1,
        cunning: 1
    }
}, 'futanari');
