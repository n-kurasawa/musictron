import { PLAY } from './';
import youtube from '../api/youtube';

export function setIframe() {
  return (dispatch, getState) => {
    youtube.setIframe(null, (event) => {
      switch (event.data) {
        case YT.PlayerState.ENDED:
          dispatch(endVideo());
          break;
        case YT.PlayerState.PLAYING:
          dispatch(play());
          break;
        case YT.PlayerState.PAUSED:
          dispatch(pause());
          break;
      }
    });
  };
}

export function checkItem(item) {
  return { type: PLAY.CHECK_ITEM, item: item };
}

export function uncheckItem(item) {
  return { type: PLAY.UNCHECK_ITEM, item: item };
}

export function play() {
  return { type: PLAY.PLAY };
}

export function pause() {
  return { type: PLAY.PAUSE };
}

export function playById(videoId) {
  youtube.loadVideoById(videoId);
  return { type: PLAY.PLAY, videoId };
}

export function playVideo() {
  youtube.playVideo();
  return { type: PLAY.PLAY };
}

export function pouseVideo() {
  youtube.pauseVideo();
  return { type: PLAY.PAUSE };
}

export function endVideo() {
  return { type: PLAY.END };
}

export function closeView(){
  return { type: PLAY.CLOSE_VIEW };
}

export function openView(){
  return { type: PLAY.OPEN_VIEW };
}

export function remove(videoId) {
  return { type: PLAY.REMOVE, videoId };
}

export function shuffle() {
  return { type: PLAY.SHUFFLE };
}

export function loop() {
  return { type: PLAY.LOOP };
}
