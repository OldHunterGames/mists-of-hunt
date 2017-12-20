// @flow

import type { Name } from 'types/name';
import type { TraitKey } from 'types/trait';

export type Character = {
    name: Name,
    traits: Array<TraitKey>
};
