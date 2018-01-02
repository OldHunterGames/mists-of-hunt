// @flow

type FrequenciesList<T> = Array<[number, T]>;

const reduceChances = (data, [freq, item]) => {
    // $FlowFixMe
    data.max += freq;

    data.entries.push({
        item,
        freq: data.max
    });

    return data;
};

export default (frequencies: FrequenciesList<*>) => {
    const { max, entries } = frequencies.reduce(reduceChances, {
        max: 0,
        entries: []
    });

    return () => {
        const value = Math.random() * max;
        const entry = entries.find((e) => value <= e.freq);

        // $FlowFixMe
        return entry.item;
    };
};
