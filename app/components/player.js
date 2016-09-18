import React, { Component, PropTypes } from 'react';
import { setIframe } from '../api/youtube';
import styles from './styles/player.css';

class Player extends Component {
  static propTypes = {
    endVideo: PropTypes.func.isRequired,
    playById: PropTypes.func.isRequired,
    isEnded: PropTypes.bool.isRequired,
    isClosed: PropTypes.bool.isRequired,
    nextVideo: PropTypes.object
  };

  componentDidMount() {
    setIframe(null, (event) => {
      if (event.data == YT.PlayerState.ENDED) {
        this.props.endVideo();
      }
    });
  }

  componentDidUpdate() {
    const { isEnded, nextVideo, playById } = this.props;
    if (isEnded && nextVideo) {
      playById(nextVideo.id.videoId);
    }
  }

  render() {
    const style = this.props.isClosed ? styles.close : styles.open;

    return (
      <div className={style}>
        <div id="player"></div>
      </div>
    );
  }
}

export default Player;
