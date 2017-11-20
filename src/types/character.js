// @flow

import type { Name } from 'types/name';
import type { Gender } from 'types/gender';
import type { CharacterAttributes } from 'types/character-attributes';

export type Character = {
    name: Name,
    gender: Gender,
    attributes: CharacterAttributes
};
