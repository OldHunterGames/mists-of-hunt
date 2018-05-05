// @flow

import { TRAIT_LEVEL } from '@game/character/traits';

import traitDB from '@game/db/trait';

import type { Trait } from '@game/character/traits';

const _LAWFUL: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        mind: 1
    }
};

const _NEUTRAL: Trait = {
    level: TRAIT_LEVEL.common
};

const _CHAOTIC: Trait = {
    level: TRAIT_LEVEL.common,
    modifiers: {
        might: 1
    }
};

const registered = traitDB.registerGroup('ALIGNMENT.ETHIC', {
    entries: {
        LAWFUL: _LAWFUL,
        NEUTRAL: _NEUTRAL,
        CHAOTIC: _CHAOTIC
    },
    random: {
        type: 'frequencies',
        data: [
            { freq: 1, value: _LAWFUL },
            { freq: 2, value: _NEUTRAL },
            { freq: 1, value: _CHAOTIC }
        ]
    }
});

export const {
    LAWFUL,
    NEUTRAL,
    CHAOTIC
} = registered;

export default registered.default;
