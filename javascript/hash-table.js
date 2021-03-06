class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        if (bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keyArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}

// check
const myHashTable = new HashTable(50);
myHashTable.set('nova', 10000);
myHashTable.get('nova');
myHashTable.set('blackhole', 3);
myHashTable.get('blackhole');
myHashTable.keys()