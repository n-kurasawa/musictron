import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/search';
import * as SearchActions from '../actions/search-actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
