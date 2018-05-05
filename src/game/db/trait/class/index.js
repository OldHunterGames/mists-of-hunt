// @flow

import { TRAIT_LEVEL } from '@game/character/traits';

import traitDB from '@game/db/trait';

import type { Trait } from '@game/character/traits';

const _PEON: Trait = {
    level: TRAIT_LEVEL.common
};

const _WARRIOR: Trait = {
    level: TRAIT_LEVEL.rare
};

const _SCHOLAR: Trait = {
    level: TRAIT_LEVEL.rare
};

const _DIPLOMAT: Trait = {
    level: TRAIT_LEVEL.rare
};

const _ROUGE: Trait = {
    level: TRAIT_LEVEL.rare
};

const registered = traitDB.registerGroup('CLASS', {
    entries: {
        PEON: _PEON,
        WARRIOR: _WARRIOR,
        SCHOLAR: _SCHOLAR,
        DIPLOMAT: _DIPLOMAT,
        ROUGE: _ROUGE
    },
    random: {
        type: 'frequencies',
        data: [
            { freq: 4, value: _PEON },
            { freq: 1, value: _WARRIOR },
            { freq: 1, value: _SCHOLAR },
            { freq: 1, value: _DIPLOMAT },
            { freq: 1, value: _ROUGE }
        ]
    }
});

export const {
    PEON,
    WARRIOR,
    SCHOLAR,
    DIPLOMAT,
    ROUGE
} = registered;

export default registered.default;
