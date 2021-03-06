// @flow

import type { Name } from './name';

export type Character = {
    name: Name,
    traits: string[]
};

export { default as getEmpty } from './get-empty';
export { default as getRandom } from './get-random';
