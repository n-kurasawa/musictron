import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopBar from '../components/top-bar';
import * as PlayActions from '../actions/play-actions';

function getPreviousVideo(index, cueItems) {
  if (index === -1) { return; }
  if (cueItems[index - 1]) {
    return cueItems[index - 1];
  }
}

function getNextVideo(index, cueItems) {
  if (index === -1) { return; }
  if (cueItems[index + 1]) {
    return cueItems[index + 1];
  }
}

function mapStateToProps(state) {
  const index = state.play.cueItems.findIndex((item) => {
    return item === state.play.playingVideo
  });

  return {
    playingVideo: state.play.playingVideo,
    firstVideo: state.play.cueItems[0],
    previousVideo: getPreviousVideo(index, state.play.cueItems),
    nextVideo: getNextVideo(index, state.play.cueItems),
    isPlaying: state.play.isPlaying,
    isShuffle: state.play.isShuffle,
    isLoop: state.play.isLoop
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
