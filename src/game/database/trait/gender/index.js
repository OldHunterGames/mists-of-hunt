// @flow

import type { Trait } from 'types/trait';

import getRandomizer from './random';

export const MALE: Trait = {
    modifiers: {
        might: 1,
        charm: -1
    }
};

export const FEMALE: Trait = {
    modifiers: {
        might: -1,
        charm: 1
    }
};

export const FUTANARI: Trait = {
    modifiers: {
        mind: -1,
        cunning: 1
    }
};

export const GENDER = {
    entries: {
        MALE,
        FEMALE,
        FUTANARI
    },
    getRandom: getRandomizer({
        MALE,
        FEMALE,
        FUTANARI
    })
};

export default (next) => {
    next({
        MALE: () => MALE,
        FEMALE: () => FEMALE,
        FUTANARI: () => FUTANARI
    });

    return GENDER;
};
