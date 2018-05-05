// @flow

import { mapMetadata as mapRandomMetadata } from '@game/random';

import type { Trait } from '@game/character/traits';
import type { Metadata as RandomMetadata } from '@game/random';

export type TraitGroupData<T: Trait | string> = {
    entries: {
        [key: string]: T
    },
    random: RandomMetadata
};

class TraitDB {
    traits: { [key: string]: Trait } = {};
    groups: { [key: string]: TraitGroupData<string> } = {};

    registerGroup = (groupKey: string, data: TraitGroupData<Trait>): { [key: string]: string } => {
        if (this.getGroup(groupKey)) {
            throw new Error(`Group "${groupKey}" already registered`);
        }

        const keysMap: Map<Trait, string> = new Map();
        const { exports, entities } = Object.entries(data.entries).reduce((result, [traitName, trait]) => {
            const key = `${groupKey}.${traitName}`;

            if (this.getTrait(key)) {
                throw new Error(`Trait "${key}" already registered`);
            }

            // $FlowFixMe just do it
            data.entries[traitName] = key;

            // $FlowFixMe this is trait
            keysMap.set(trait, key);

            return {
                exports: {
                    ...result.exports,
                    [traitName]: key
                },
                entities: {
                    ...result.entities,
                    [key]: trait
                }
            };
        }, {
            exports: {},
            entities: {}
        });

        mapRandomMetadata(data.random, keysMap);

        this.traits = {
            ...this.traits,
            ...entities
        };

        this.groups = {
            ...this.groups,
            [groupKey]: data
        };

        return {
            ...exports,
            default: groupKey
        };
    };

    getTrait = (key: string): Trait => {
        return this.traits[key];
    }

    getGroup = (key: string): TraitGroupData<string> => {
        return this.groups[key];
    }
}

export default new TraitDB();
