import React from 'react';
import TopBar from '../containers/top-bar-container';
import Table from '../containers/table-container';
import Player from '../containers/player-container';
import styles from './styles/main-panel.css';

const MainPanel = () => (
  <div className={`pane ${styles.mainPanel}`}>
    <TopBar />
    <Player />
    <Table />
  </div>
);

export default MainPanel;
