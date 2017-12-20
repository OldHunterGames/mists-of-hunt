// @flow

import type { CharacterAttributes } from 'types/character-attributes';

export type TraitKey = string;

export type TraitModifiers = {
    [attribute: $Keys<CharacterAttributes>]: number
}

export type Trait = {
    key: string,
    modifiers?: TraitModifiers
};
