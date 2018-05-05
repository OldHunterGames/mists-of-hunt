// @flow

import { TRAIT_LEVEL } from '@game/character/traits';

import traitDB from '@game/db/trait';

import type { Trait } from '@game/character/traits';

const _GOOD: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        charm: 1
    }
};

const _NEUTRAL: Trait = {
    level: TRAIT_LEVEL.common
};

const _EVIL: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        cunning: 1
    }
};

const registered = traitDB.registerGroup('ALIGNMENT.MORAL', {
    entries: {
        GOOD: _GOOD,
        NEUTRAL: _NEUTRAL,
        EVIL: _EVIL
    },
    random: {
        type: 'frequencies',
        data: [
            { freq: 1, value: _GOOD },
            { freq: 2, value: _NEUTRAL },
            { freq: 1, value: _EVIL }
        ]
    }
});

export const {
    GOOD,
    NEUTRAL,
    EVIL
} = registered;

export default registered.default;
