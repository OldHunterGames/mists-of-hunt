// @flow

import { TRAIT_LEVEL } from '@game/character/traits';

import traitDB from '@game/db/trait';

import type { Trait } from '@game/character/traits';

const _HUMAN: Trait = {
    level: TRAIT_LEVEL.common
};

const _FAY: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: -1,
        charm: 1
    }
};

const _FURY: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: 1,
        mind: -1
    }
};

const _GHOUL: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: 1,
        cunning: 1,
        charm: -2
    }
};

const registered = traitDB.registerGroup('RACE', {
    entries: {
        HUMAN: _HUMAN,
        FAY: _FAY,
        FURY: _FURY,
        GHOUL: _GHOUL
    },
    random: {
        type: 'frequencies',
        data: [
            { freq: 3, value: _HUMAN },
            { freq: 1, value: _FAY },
            { freq: 1, value: _FURY },
            { freq: 1, value: _GHOUL }
        ]
    }
});

export const {
    HUMAN,
    FAY,
    FURY,
    GHOUL
} = registered;

export default registered.default;
