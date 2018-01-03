// @flow

import frequenciesRandom from 'utils/randomizers/frequencies';

import type { Trait } from 'types/trait';

export const LAWFUL: Trait = {
    modifiers: {
        mind: 1
    }
};

export const NEUTRAL: Trait = {};

export const CHAOTIC: Trait = {
    modifiers: {
        might: 1
    }
};

export const ETHIC = {
    entries: {
        LAWFUL,
        NEUTRAL,
        CHAOTIC
    },
    getRandom: frequenciesRandom([
        [25, LAWFUL],
        [50, NEUTRAL],
        [25, CHAOTIC]
    ])
};

export default (next) => {
    next({
        LAWFUL: () => LAWFUL,
        NEUTRAL: () => NEUTRAL,
        CHAOTIC: () => CHAOTIC
    });

    return ETHIC;
};
