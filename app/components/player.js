import React, { Component, PropTypes } from 'react';
import { setIframe } from '../api/youtube';
import styles from './styles/player.css';

class Player extends Component {
  static propTypes = {
    endVideo: PropTypes.func.isRequired,
    playById: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    isEnded: PropTypes.bool.isRequired,
    isClosed: PropTypes.bool.isRequired,
    nextVideo: PropTypes.object
  };

  componentDidMount() {
    setIframe(null, (event) => {
      switch (event.data) {
        case YT.PlayerState.ENDED:
          this.props.endVideo();
          break;
        case YT.PlayerState.PLAYING:
          this.props.play();
          break;
        case YT.PlayerState.PAUSED:
          this.props.pause();
          break;
        default:
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
