import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Playlist from '../components/playlist';
import * as PlaylistActions from '../actions/playlist-actions';
import * as PlayActions from '../actions/play-actions';

function mapStateToProps(state) {
  return {
    lists: state.playlist.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, PlaylistActions, { selectPlaylist: PlayActions.selectPlaylist } ), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
