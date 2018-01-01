// @flow

const keygen = (index: string, prefix: string) => {
    if (!prefix) {
        return index;
    }

    return `${prefix}.${index}`;
};

export default class Register {
    indexMap: Map<*, string> = new Map();
    itemMap: Map<string, *> = new Map();

    set(item: any, index: string) {
        this.indexMap.set(item, index);
        this.itemMap.set(index, item);

        return item;
    }

    getIndex(item: any) {
        return this.indexMap.get(item);
    }

    getItem(index: string) {
        return this.itemMap.get(index);
    }

    getRegister = (prefix: string) => (item: any, index: string) => this.set(item, keygen(index, prefix));
}
