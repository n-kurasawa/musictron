import localforage from 'localforage';

class Repository extends localforage.constructor {
  constructor(options) {
    const opt = Object.assign({
      driver: localforage.INDEXEDDB,
      name: 'musictron'
    }, options);
    super(opt);
  }

  all() {
    const items = [];
    return this.iterate(value => {
      items.push(value);
    }).then(() => items);
  }
}

export default Repository;
