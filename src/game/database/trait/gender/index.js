// @flow

import type { Trait } from 'types/trait';

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

export default (next) => {
    next({
        MALE: () => MALE,
        FEMALE: () => FEMALE,
        FUTANARI: () => FUTANARI
    });
};
