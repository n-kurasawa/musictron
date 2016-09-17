import React, { Component, PropTypes } from 'react';
import styles from './styles/top-bar.css';

class TopBar extends Component {
  static propTypes = {};

  stop() {
    return (<span class="icon icon-stop"></span>);
  }

  render() {
    return (
      <div className={styles.topBar}>
        <div className={styles.playing}>SAKANAMON「ミュージックプランクトン」</div>
        <div className={styles.playArea}>
          <span className={`icon icon-fast-backward ${styles.fast}`}></span>
          <span className={`icon icon-play ${styles.play}`}></span>
          <span className={`icon icon-fast-forward ${styles.fast}`}></span>
        </div>
      </div>
    );
  }
}

export default TopBar;
