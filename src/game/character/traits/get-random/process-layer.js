// @flow

import random from '@game/random';

import traitDB from '@game/db/trait';

export type RandomTraitLayer = {
    required: 'all' | {|
        [level: number]: number
    |},
    groups: string[]
}

export default (traits: string[], layer: RandomTraitLayer): string[] => {
    const { required } = layer;

    if (required === 'all') {
        return [
            ...traits,
            ...layer.groups.map((groupKey) => {
                const group = traitDB.getGroup(groupKey);

                return random(group.random);
            })
        ];
    }

    return traits;
};
