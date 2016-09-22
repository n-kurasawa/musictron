import { PLAY } from '../actions/';
import _ from 'lodash';

const initialState = {
  cueItems: [],
  playingVideo: {},
  isPlaying: false,
  isPausing: false,
  isEnded: false,
  isClosed: false
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case PLAY.CHECK_ITEM:
      return checkItem(state, action.item);
    case PLAY.UNCHECK_ITEM:
      return uncheckItem(state, action.item);
    case PLAY.PLAY:
      return play(state, action.videoId);
    case PLAY.PAUSE:
      return pause(state);
    case PLAY.END:
      return end(state);
    case PLAY.OPEN_VIEW:
      return open(state);
    case PLAY.CLOSE_VIEW:
      return close(state);
    case PLAY.REMOVE:
      return remove(state, action.videoId);
    default:
      return state;
  }
}

function checkItem(state, checkItem) {
  return _.assign({}, state, {
    cueItems: [...state.cueItems, checkItem],
  });
}

function uncheckItem(state, uncheckItem) {
  return _.assign({}, state, {
    cueItems: state.cueItems.filter((item) => {
      return item.id.videoId !== uncheckItem.id.videoId;
    })
  });
}

function play(state, videoId) {
  let playingVideo;
  if (videoId) {
    playingVideo = state.cueItems.find((item) => {
      return item.id.videoId === videoId;
    });
  } else {
    playingVideo = state.playingVideo;
  }

  return _.assign({}, state, {
    playingVideo,
    isPlaying: true,
    isPausing: false,
    isEnded: false
  });
}

function pause(state) {
  return _.assign({}, state, {
    isPausing: true,
    isPlaying: false
  });
}

function end(state) {
  return _.assign({}, state, {
    isEnded: true
  });
}

function close(state) {
  return _.assign({}, state, {
    isClosed: true
  });
}

function open(state) {
  return _.assign({}, state, {
    isClosed: false
  });
}

function remove(state, videoId) {
  const cueItems = state.cueItems.filter((item) => {
    return item.id.videoId !== videoId;
  });

  return _.assign({}, state, {
    cueItems
  });

}
