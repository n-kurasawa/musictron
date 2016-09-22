import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/player';
import * as PlayActions from '../actions/play-actions';

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
    nextVideo: getNextVideo(index, state.play.cueItems),
    isEnded: state.play.isEnded,
    isClosed: state.play.isClosed,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
