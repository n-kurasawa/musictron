import { combineReducers } from 'redux';
import play from './play-reducer';
import search from './search-reducer';
import playlist from './playlist-reducer';

const rootReducer = combineReducers({
  play,
  search,
  playlist
});

export default rootReducer;
