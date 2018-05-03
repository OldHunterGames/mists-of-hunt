// @flow

import type { CharacterAttributeValue } from 'types/character-attributes';

export default (v: number): CharacterAttributeValue => {
    if (v < 0) return 0;
    if (v > 5) return 5;

    // $FlowFixMe number literal
    return v;
};
