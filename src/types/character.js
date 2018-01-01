// @flow

import type { Name } from 'types/name';
import type { Trait } from 'types/trait';

export type Character = {
    name: Name,
    traits: Array<Trait>
};
