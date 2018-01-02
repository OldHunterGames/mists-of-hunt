// @flow

import type { Trait } from 'types/trait';

export const GOOD: Trait = {
    modifiers: {
        charm: 1
    }
};

export const EVIL: Trait = {
    modifiers: {
        cunning: 1
    }
};

export default (next) => {
    next({
        GOOD: () => GOOD,
        EVIL: () => EVIL
    });
};
