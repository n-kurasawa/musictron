import localforage from "localforage";
import uuid from "uuid";

class Repository extends localforage.constructor {
  constructor(options) {
    const opt = Object.assign({
        driver      : localforage.INDEXEDDB,
        name        : 'musictron'
    }, options)
    super(opt);
  }

  all() {
    let items = [];
    return this.iterate((value, key, iterationNumber) => {
      items.push(value);
    }).then(() => {
      return items;
    });
  }
}

export default Repository;
