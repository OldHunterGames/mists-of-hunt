// @flow

import { set, reduce } from 'lodash';

import type { CharacterAttributes } from 'types/character-attributes';
import type { Trait } from 'types/trait';

const modifyAttribute = (attributes: CharacterAttributes, modifier: number, key: $Keys<CharacterAttributes>) => (
    set(attributes, key, attributes[key] + modifier)
);

export default (attributes: CharacterAttributes, { modifiers }: Trait) => {
    if (!modifiers) {
        return attributes;
    }

    return reduce(modifiers, modifyAttribute, attributes);
};
