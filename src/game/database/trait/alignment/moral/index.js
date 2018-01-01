// @flow

import type { Trait } from 'types/trait';

import parent from '../';

const register = parent.extend('moral');

export const GOOD: Trait = register.set({
    modifiers: {
        charm: 1
    }
}, 'good');

export const EVIL: Trait = register.set({
    modifiers: {
        cunning: 1
    }
}, 'evil');
