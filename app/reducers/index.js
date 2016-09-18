import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app-reducer';

const rootReducer = combineReducers({
  app,
  routing
});

export default rootReducer;
