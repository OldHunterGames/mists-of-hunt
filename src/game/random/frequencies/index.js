// @flow

export type DataItem = {|
    value: any,
    freq: number
|};

export type Data = DataItem[];

export type Metadata = {
    type: 'frequencies',
    data: Data
};

export type Type = $PropertyType<Metadata, 'type'>;

export const TYPE: Type = 'frequencies';

export const mapMetadata = function (metadata: Metadata, keysMap: Map<*, string>): Metadata {
    metadata.data.forEach(({ value }, i) => {
        metadata.data[i].value = keysMap.get(value);
    });

    return metadata;
};

export default function (data: Data, random?: () => number = Math.random) {
    const { max, entries } = data.reduce((result, item) => {
        result.max += item.freq;

        result.entries.push({
            value: item.value,
            max: result.max
        });

        return result;
    }, {
        max: 0,
        entries: []
    });

    const value = random() * max;
    const entry = entries.find((e) => value <= e.max);

    // $FlowFixMe entry must be finded
    return entry.value;
}
