import React, { Component, PropTypes } from 'react';
import { setIframe } from '../api/youtube';
import TopBar from '../containers/top-bar-container';
import Table from '../containers/table-container';
import styles from './styles/main-panel.css';

class MainPanel extends Component {
  static propTypes = {};

  componentDidMount() {
    setIframe();
  }

  render() {
    return (
      <div className={`pane ${styles.mainPanel}`}>
        <TopBar />
        <div id="player"></div>
        <Table />
      </div>
    );
  }
}

export default MainPanel;
