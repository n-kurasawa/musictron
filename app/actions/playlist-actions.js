import { PLAYLIST } from './';
import playlistRepo from '../repositories/playlist-repository';

export function save(title) {
  return (dispatch, getState) => {
    const playlist = { title, items: [] };
    playlistRepo.savePlaylist(playlist).then((savedPlaylist) => {
      dispatch({ type: PLAYLIST.SAVE, playingList: savedPlaylist });
    });
  };
}

export function add(item) {
  return (dispatch, getState) => {
    console.log(getState());
    playlistRepo.addPlaylist(item).then(() => {
      dispatch({ type: PLAYLIST.ADD });
    });
  };
}

export function remove(id) {
  return (dispatch, getState) => {
    playlistRepo.removePlaylist(id).then(() => {
      dispatch({ type: PLAYLIST.REMOVE, id: id });
    });
  };
}

export function fetch() {
  return (dispatch, getState) => {
    playlistRepo.findAll().then((lists) => {
      dispatch({ type: PLAYLIST.FETCH, lists: lists });
    });
  };
}

export function select(list) {
  return { type: PLAYLIST.SELECT, playingList: list };
}
