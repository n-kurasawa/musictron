import React, { Component, PropTypes } from 'react';
import styles from './styles/top-bar.css';

class TopBar extends Component {
  static propTypes = {
    playingVideo: PropTypes.object.isRequired,
    firstVideo: PropTypes.object,
    previousVideo: PropTypes.object,
    nextVideo: PropTypes.object,
    isPlaying: PropTypes.bool.isRequired,
    playVideo: PropTypes.func.isRequired,
    playById: PropTypes.func.isRequired,
    pouseVideo: PropTypes.func.isRequired,
  };

  play() {
    const { playingVideo, firstVideo } = this.props;
    if (playingVideo.id) {
      this.props.playVideo();
    } else if (firstVideo){
      this.props.playById(firstVideo.id.videoId);
    }
  }

  pouse() {
    this.props.pouseVideo();
  }

  previous() {
    if (this.props.previousVideo) {
      this.props.playById(this.props.previousVideo.id.videoId)
    }
  }

  next() {
    if (this.props.nextVideo) {
      this.props.playById(this.props.nextVideo.id.videoId)
    }
  }

  playButton(isPlaying) {
    if (isPlaying) {
      return (<span className={`icon icon-stop ${styles.play}`} onClick={() => { this.pouse() }}></span>);
    } else {
      return (<span className={`icon icon-play ${styles.play}`} onClick={() => { this.play() }}></span>);
    }
  }

  render() {
    const { playingVideo, isPlaying } = this.props;
    const title = playingVideo.snippet ? playingVideo.snippet.title : '';
    const playButton = this.playButton(isPlaying);
    return (
      <div className={styles.topBar}>
        <div className={styles.playing}>{ title }</div>
        <div className={styles.playArea}>
          <span className={`icon icon-fast-backward ${styles.fast}`} onClick={() => { this.previous() }}></span>
          { playButton }
          <span className={`icon icon-fast-forward ${styles.fast}`} onClick={() => { this.next() }}></span>
        </div>
      </div>
    );
  }
}

export default TopBar;
