import React, { Component, PropTypes } from 'react';
import { setIframe } from '../api/youtube';
import TopBar from '../containers/top-bar-container';
import Table from '../containers/table-container';
import Player from '../containers/player-container';
import styles from './styles/main-panel.css';

class MainPanel extends Component {

  render() {
    return (
      <div className={`pane ${styles.mainPanel}`}>
        <TopBar />
        <Player />
        <Table />
      </div>
    );
  }
}

export default MainPanel;
