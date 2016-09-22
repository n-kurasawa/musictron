import { PLAY } from '../actions/';
import _ from 'lodash';

const initialState = {
  cueItems: [],
  shuffleItems: [],
  orderdItems: [],
  playingVideo: {},
  isPlaying: false,
  isPausing: false,
  isEnded: false,
  isClosed: false,
  isShuffle: false,
  isLoop: false,
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
    case PLAY.SHUFFLE:
      return shuffle(state);
    case PLAY.LOOP:
      return _.assign({}, state, { isLoop: !state.isLoop });
    default:
      return state;
  }
}

function checkItem(state, checkItem) {
  return _.assign({}, state, {
    cueItems: [...state.cueItems, checkItem],
    shuffleItems: [...state.shuffleItems, checkItem]
  });
}

function uncheckItem(state, uncheckItem) {
  return _.assign({}, state, {
    cueItems: state.cueItems.filter((item) => {
      return item.id.videoId !== uncheckItem.id.videoId;
    }),
    shuffleItems: state.shuffleItems.filter((item) => {
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

function shuffle(state) {
  let shuffleItems = [];
  if (!state.isShuffle) {
    let cueItems = [].concat(state.cueItems);
    while (cueItems.length) {
      const i = Math.floor(Math.random() * cueItems.length);
      shuffleItems.push(cueItems.splice(i, 1)[0]);
    }
  }

  return _.assign({}, state, {
    isShuffle: !state.isShuffle,
    shuffleItems
  });
}
