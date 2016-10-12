import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/table';
import * as PlayActions from '../actions/play-actions';
import * as PlaylistActions from '../actions/playlist-actions';

function mapStateToProps(state) {
  return {
    cueItems: state.play.cueItems,
    isClosed: state.play.isClosed,
    playingVideo: state.play.playingVideo,
    playingList: state.playlist.playingList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
