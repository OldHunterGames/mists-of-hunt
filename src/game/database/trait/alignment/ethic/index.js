// @flow

import type { Trait } from 'types/trait';

export const CHAOTIC: Trait = {
    modifiers: {
        might: 1
    }
};

export const LAWFUL: Trait = {
    modifiers: {
        mind: 1
    }
};

export default (next) => {
    next({
        CHAOTIC: () => CHAOTIC,
        LAWFUL: () => LAWFUL
    });
};
