// @flow

import { TRAIT_LEVEL } from '@game/character/traits';

import traitDB from '@game/db/trait';

import type { Trait } from '@game/character/traits';

const _MALE: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: 1,
        charm: -1
    }
};

const _FEMALE: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: -1,
        charm: 1
    }
};

const _FUTANARI: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        mind: -1,
        cunning: 1
    }
};

const registered = traitDB.registerGroup('GENDER', {
    entries: {
        MALE: _MALE,
        FEMALE: _FEMALE,
        FUTANARI: _FUTANARI
    },
    random: {
        type: 'plain',
        data: [
            _MALE,
            _FEMALE
        ]
    }
});

export const {
    FEMALE,
    MALE,
    FUTANARI
} = registered;

export default registered.default;
