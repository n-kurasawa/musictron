import { PLAYLIST } from './';
import * as repository from '../api/repository';

export function save(title, items) {
  return (dispatch, getState) => {
    repository.addPlaylist(title, items).then(() => {
      dispatch({ type: PLAYLIST.SAVE, playingList: { title: title, items: items } });
    });
  };
}

export function fetch() {
  return (dispatch, getState) => {
    repository.fetchPlaylist().then((lists) => {
      dispatch({ type: PLAYLIST.FETCH, lists: lists });
    });
  };
}

export function select(list) {
  return { type: PLAYLIST.SELECT, playingList: list }
}
