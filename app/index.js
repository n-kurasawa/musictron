import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/app';
import './app.global.css';

const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
