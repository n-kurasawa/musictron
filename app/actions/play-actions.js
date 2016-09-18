import { PLAY } from './';
import * as youtube from '../api/youtube';

export function checkItem(item) {
  return { type: PLAY.CHECK_ITEM, item: item };
}

export function uncheckItem(item) {
  return { type: PLAY.UNCHECK_ITEM, item: item };
}

export function playById(videoId) {
  youtube.loadVideoById(videoId);
  return { type: PLAY.PLAY, videoId: videoId };
}

export function cueById(videoId) {
  youtube.cueVideoById(videoId);
  return { type: PLAY.CUE, videoId: videoId };
}
