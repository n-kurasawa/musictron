import localforage from "localforage";

export function init() {
  localforage.config({
      driver      : localforage.INDEXEDDB,
      name        : 'musictron',
      version     : 1.0,
      description : 'store of musictron'
  });
}

function getItem(key) {
  return localforage.getItem(key);
}

function setItem(key, val) {
  return localforage.setItem(key, val);
}

export function addPlaylist(title, items) {
  return getItem('playlists').then((values) => {
    if (!values) { values = []; }
    return setItem('playlists', [...values, {title: title, items: items}]);
  });
}

export function fetchPlaylist() {
  return getItem('playlists');
}
