// @flow

import { reduce, set } from 'lodash';

import type { CharacterAttributes } from 'types/character-attributes';

import normalizeValue from './normalize-value';

const iteratee = (attributes: CharacterAttributes, value: number, key: $Keys<CharacterAttributes>) => (
    set(attributes, key, normalizeValue(value))
);

export default (attributes: CharacterAttributes): CharacterAttributes => (
    reduce(attributes, iteratee, {})
);
