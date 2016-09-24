import React, { Component, PropTypes } from 'react';
import styles from './styles/top-bar.css';

class TopBar extends Component {
  static propTypes = {
    playingVideo: PropTypes.object.isRequired,
    firstVideo: PropTypes.object,
    previousVideo: PropTypes.object,
    nextVideo: PropTypes.object,
    isShuffle: PropTypes.bool.isRequired,
    isLoop: PropTypes.bool.isRequired,
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

  shuffle() {
    this.props.shuffle();
  }

  loop() {
    this.props.loop();
  }

  playButton(isPlaying) {
    if (isPlaying) {
      return (<span className={`icon icon-stop ${styles.play}`} onClick={() => { this.pouse() }}></span>);
    } else {
      return (<span className={`icon icon-play ${styles.play}`} onClick={() => { this.play() }}></span>);
    }
  }

  render() {
    const { playingVideo, isPlaying, isShuffle, isLoop } = this.props;
    const title = playingVideo.snippet ? playingVideo.snippet.title : '';
    const playButton = this.playButton(isPlaying);
    const shuffleStyle = isShuffle ? styles.iconActive : null;
    const loopStyle = isLoop ? styles.iconActive : null;
    return (
      <div className={styles.topBar}>
        <label className={styles.playing}>{ title }</label>
        <div className={styles.playArea}>
          <span className={`icon icon-shuffle ${styles.button} ${shuffleStyle}`} onClick={() => { this.shuffle() }}></span>
          <span className={`icon icon-loop ${styles.button} ${loopStyle}`} onClick={() => { this.loop() }}></span>
          <span className={`icon icon-fast-backward ${styles.fast}`} onClick={() => { this.previous() }}></span>
          { playButton }
          <span className={`icon icon-fast-forward ${styles.fast}`} onClick={() => { this.next() }}></span>
        </div>
      </div>
    );
  }
}

export default TopBar;
