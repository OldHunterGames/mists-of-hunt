// @flow

import type { Attributes } from '@game/character/attributes';

export type Modifiers = $Shape<Attributes>;

export const TRAIT_LEVEL: {|
    common: 0,
    rare: 1
|} = {
    common: 0,
    rare: 1
};

export type TraitLevel = $Values<typeof TRAIT_LEVEL>;

export type Trait = {
    level: TraitLevel,
    modifiers?: Modifiers
};
