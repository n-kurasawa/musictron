import React, { Component, PropTypes } from 'react';
import styles from './styles/player.css';

class Player extends Component {
  static propTypes = {
    playById: PropTypes.func.isRequired,
    setIframe: PropTypes.func.isRequired,
    isEnded: PropTypes.bool.isRequired,
    isClosed: PropTypes.bool.isRequired,
    nextVideo: PropTypes.object
  };

  componentDidMount() {
    this.props.setIframe();
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
