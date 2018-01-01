// @flow

const keygen = (index: string, prefix: string) => {
    if (!prefix) {
        return index;
    }

    return `${prefix}.${index}`;
};

export default class Register {
    prefix: string = '';
    maps: {
        index: Map<*, string>,
        item: Map<string, *>
    } = {
        index: new Map(),
        item: new Map()
    };

    set<Item>(item: Item, index: string): Item {
        const finalIndex = keygen(index, this.prefix);

        this.maps.index.set(item, finalIndex);
        this.maps.item.set(finalIndex, item);

        return item;
    }

    getIndex(item: any) {
        return this.maps.index.get(item);
    }

    getItem(index: string) {
        return this.maps.item.get(index);
    }

    extend(prefix: string): Register {
        const newInstance = new Register();

        return Object.assign(newInstance, {
            maps: this.maps,
            prefix: keygen(prefix, this.prefix)
        });
    }
}
