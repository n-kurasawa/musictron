// @flow
import React, { Component } from 'react';
import styles from './styles/top-bar.css';

class TopBar extends Component {
  props: {
    playingVideo: Object,
    firstVideo: ?Object,
    previousVideo: ?Object,
    nextVideo: ?Object,
    isShuffle: boolean,
    isLoop: boolean,
    isPlaying: boolean,
    playVideo: Function,
    playById: Function,
    pouseVideo: Function,
    shuffle: Function,
    loop: Function
  }

  play() {
    const { playingVideo, firstVideo } = this.props;
    if (playingVideo.id) {
      this.props.playVideo();
    } else if (firstVideo) {
      this.props.playById(firstVideo.id.videoId);
    }
  }

  pouse() {
    this.props.pouseVideo();
  }

  previous() {
    if (this.props.previousVideo) {
      this.props.playById(this.props.previousVideo.id.videoId);
    }
  }

  next() {
    if (this.props.nextVideo) {
      this.props.playById(this.props.nextVideo.id.videoId);
    }
  }

  shuffle() {
    this.props.shuffle();
  }

  loop() {
    this.props.loop();
  }

  playButton(isPlaying: boolean) {
    if (isPlaying) {
      return (<span className={`icon icon-stop ${styles.play}`} onClick={() => { this.pouse(); }} />);
    } else {
      return (<span className={`icon icon-play ${styles.play}`} onClick={() => { this.play(); }} />);
    }
  }

  render() {
    const { playingVideo, isPlaying, isShuffle, isLoop } = this.props;
    const title = playingVideo.snippet ? playingVideo.snippet.title : '';
    const playButton = this.playButton(isPlaying);
    const shuffleStyle = isShuffle ? styles.iconActive : '';
    const loopStyle = isLoop ? styles.iconActive : '';
    return (
      <div className={`pane-group ${styles.topBar}`}>
        <div className="pane">
          <div className={styles.playing} title={title}>{ title }</div>
        </div>
        <div className={`pane-one-third ${styles.playArea}`}>
          <span className={`icon icon-shuffle ${styles.button} ${shuffleStyle}`} onClick={() => { this.shuffle(); }} />
          <span className={`icon icon-loop ${styles.button} ${loopStyle}`} onClick={() => { this.loop(); }} />
          <span className={`icon icon-to-start ${styles.fast}`} onClick={() => { this.previous(); }} />
          { playButton }
          <span className={`icon icon-to-end ${styles.fast}`} onClick={() => { this.next(); }} />
        </div>
      </div>
    );
  }
}

export default TopBar;
