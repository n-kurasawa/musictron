// @flow
import React, { Component } from 'react';
import styles from './styles/player.css';

class Player extends Component {
  componentDidMount() {
    this.props.setIframe();
  }

  componentDidUpdate() {
    const { isEnded, nextVideo, playById } = this.props;
    if (isEnded && nextVideo) {
      playById(nextVideo.id.videoId);
    }
  }

  props: {
    playById: Function,
    setIframe: Function,
    isEnded: boolean,
    isClosed: boolean,
    nextVideo: Object
  };

  render() {
    const style = this.props.isClosed ? styles.close : styles.open;

    return (
      <div className={style}>
        <div id="player" />
      </div>
    );
  }
}

export default Player;
