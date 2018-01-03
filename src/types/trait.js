// @flow

import type { CharacterAttributes } from 'types/character-attributes';

export type TraitModifiers = {
    [attribute: $Keys<CharacterAttributes>]: number
}

export type Trait = {
    modifiers?: TraitModifiers
};

export type TraitsMap = {
    [name: string]: Trait
};
