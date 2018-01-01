// @flow

import type { Character as CharacterData } from 'types/character';

import getDefaultAttributes from './attributes/get-default';
import normalizeAttributes from './attributes/normalize-attributes';

import applyModifiers from './trait/apply-modifiers';

import getEmptyName from './name/get-empty';

const emptyCharacter = {
    name: getEmptyName(),
    traits: []
};

export default class Character {
    constructor(data: CharacterData) {
        this.data = {
            ...emptyCharacter,
            ...data,
            name: {
                ...emptyCharacter.name,
                ...(data && data.name)
            }
        };
    }

    data: CharacterData;

    getTraits() {
        return this.data.traits;
    }

    getAttributes() {
        const attributes = this.data.traits.reduce(
            applyModifiers,
            getDefaultAttributes()
        );

        return normalizeAttributes(attributes);
    }

    toJSON() {
        return JSON.stringify(this.data);
    }
}
