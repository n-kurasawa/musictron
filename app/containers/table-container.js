import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/table';
import * as PlayActions from '../actions/play-actions';

function mapStateToProps(state) {
  return {
    cueItems: state.app.cueItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
