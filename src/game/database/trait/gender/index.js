// @flow

import parent from '../';

const register = parent.extend('gender');

console.log(register);

export const MALE = register.set({
    modifiers: {
        might: 1,
        charm: -1
    }
}, 'male');

export const FEMALE = register.set({
    modifiers: {
        might: -1,
        charm: 1
    }
}, 'female');

export const FUTANARI = register.set({
    modifiers: {
        mind: -1,
        cunning: 1
    }
}, 'futanari');
