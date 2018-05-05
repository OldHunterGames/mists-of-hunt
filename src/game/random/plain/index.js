// @flow

export type Data = any[];

export type Metadata = {
    type: 'plain',
    data: Data
};

export type Type = $PropertyType<Metadata, 'type'>;

export const TYPE: Type = 'plain';

export const mapMetadata = function (metadata: Metadata, keysMap: Map<*, string>): Metadata {
    metadata.data.forEach((item, i) => {
        metadata.data[i] = keysMap.get(item);
    });

    return metadata;
};

export default function (data: Data, random?: () => number = Math.random) {
    const value = random() * data.length;

    return data[Math.floor(value)];
}
