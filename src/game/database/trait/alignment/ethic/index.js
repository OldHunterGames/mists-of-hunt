// @flow

import type { Trait } from 'types/trait';

import parent from '../';

const register = parent.extend('ethic');

export const CHAOTIC: Trait = register.set({
    modifiers: {
        might: 1
    }
}, 'chaotic');

export const LAWFUL: Trait = register.set({
    modifiers: {
        mind: 1
    }
}, 'lawful');
