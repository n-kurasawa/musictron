import React, { Component, PropTypes } from 'react';
import TopBar from '../components/top-bar';
import Table from '../components/table';
import styles from './styles/main-panel.css';

class MainPanel extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={`pane ${styles.mainPanel}`}>
        <TopBar />
        <Table />
      </div>
    );
  }
}

export default MainPanel;
