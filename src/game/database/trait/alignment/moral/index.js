// @flow

import frequenciesRandom from 'utils/randomizers/frequencies';

import type { Trait } from 'types/trait';

export const GOOD: Trait = {
    modifiers: {
        charm: 1
    }
};

export const NEUTRAL: Trait = {};

export const EVIL: Trait = {
    modifiers: {
        cunning: 1
    }
};

export const MORAL = {
    entries: {
        GOOD,
        NEUTRAL,
        EVIL
    },
    getRandom: frequenciesRandom([
        [25, GOOD],
        [50, NEUTRAL],
        [25, EVIL]
    ])
};

export default (next) => {
    next({
        GOOD: () => GOOD,
        NEUTRAL: () => NEUTRAL,
        EVIL: () => EVIL
    });
};
