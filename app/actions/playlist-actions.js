import { PLAYLIST, PLAY } from './';
import playlistRepo from '../repositories/playlist-repository';

export function save(title) {
  return (dispatch, getState) => {
    const playlist = { title, items: [] };
    playlistRepo.savePlaylist(playlist).then((savedPlaylist) => {
      dispatch({ type: PLAYLIST.SAVE, playingList: savedPlaylist });
      dispatch({ type: PLAY.SELECT_PLAYLIST, playlist: savedPlaylist });
    });
  };
}

export function add(item) {
  return (dispatch, getState) => {
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

export function select(id) {
  return (dispatch) => {
    playlistRepo.findPlaylist(id).then((list) => {
      dispatch({ type: PLAYLIST.SELECT, playingList: list });
      dispatch({ type: PLAY.SELECT_PLAYLIST, playlist: list });
    });
  };
}
