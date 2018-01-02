// @flow

import keygen from './keygen';

export type Value = Object | Function | Array<*>;

export default class Register {
    maps: {
        index: Map<Value, string>,
        item: Map<string, Value>
    } = {
        index: new Map(),
        item: new Map()
    };

    set<Item: Value>(item: Item, index: string): Item {
        this.maps.index.set(item, index);
        this.maps.item.set(index, item);

        return item;
    }

    getIndex(item: any) {
        return this.maps.index.get(item);
    }

    getItem(index: string) {
        return this.maps.item.get(index);
    }

    registerTree(tree: Object, prefix?: string = '') {
        Object.entries(tree).forEach(([key: string, getItem: (next: Function) => Object]) => {
            const index = keygen(key, prefix);
            // $FlowFixMe
            const item = getItem((next) => this.registerTree(next, index));

            if (item) {
                this.set(item, index);
            }
        });

        return tree;
    }
}
