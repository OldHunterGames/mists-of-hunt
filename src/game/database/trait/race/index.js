// @flow

import frequenciesRandom from 'utils/randomizers/frequencies';

import type { Trait } from 'types/trait';

export const HUMAN: Trait = {};

export const FAY: Trait = {
    modifiers: {
        might: -1,
        charm: 1
    }
};

export const FURY: Trait = {
    modifiers: {
        might: 1,
        mind: -1
    }
};

export const GHOUL: Trait = {
    modifiers: {
        might: 1,
        cunning: 1,
        charm: -2
    }
};

export const RACE = {
    entries: {
        HUMAN,
        FAY,
        FURY,
        GHOUL
    },
    getRandom: frequenciesRandom([
        [3, HUMAN],
        [1, FAY],
        [1, FURY],
        [1, GHOUL]
    ])
};

export default (next) => {
    next({
        HUMAN: () => HUMAN,
        FAY: () => FAY,
        FURY: () => FURY,
        GHOUL: () => GHOUL
    });

    return RACE;
};
