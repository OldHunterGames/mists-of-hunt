// @flow

import * as PlainRandom from './plain';
import * as FrequenciesRandom from './frequencies';

import type { Metadata as PlainMetadata } from './plain';
import type { Metadata as FrequenciesMetadata } from './frequencies';

export type Metadata =
    | PlainMetadata
    | FrequenciesMetadata;

export const TYPES = {
    plain: PlainRandom.TYPE,
    frequencies: FrequenciesRandom.TYPE
};

export const mapMetadata = function (metadata: Metadata, keysMap: Map<*, string>): Metadata {
    switch (metadata.type) {
        case TYPES.plain:
            return PlainRandom.mapMetadata(metadata, keysMap);

        case TYPES.frequencies:
            return FrequenciesRandom.mapMetadata(metadata, keysMap);

        default:
            throw new Error(`Unknown random type: ${metadata.type}`);
    }
};

export default (metadata: Metadata) => {
    const randomizer = [
        PlainRandom,
        FrequenciesRandom
    ].find(({ TYPE }) => TYPE === metadata.type);

    if (!randomizer) {
        throw new Error(`Unknown random type: ${metadata.type}`);
    }

    return randomizer.default(metadata.data);
};
