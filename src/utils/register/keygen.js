// @flow

export default (index: string, prefix: string) => {
    if (!prefix) {
        return index;
    }

    return `${prefix}.${index}`;
};
