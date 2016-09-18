import React, { Component, PropTypes } from 'react';
import TopBar from '../components/top-bar';
import Table from '../containers/table-container';
import styles from './styles/main-panel.css';

class MainPanel extends Component {
  static propTypes = {};

  componentDidMount() {
    this.callYoutubeApi();
  }

  callYoutubeApi () {
    var done = false;
    window.onYouTubeIframeAPIReady = () => {
      window.player = new YT.Player('player', {
        videoId: 'M7lc1UVf-VE',
        width: 300,
        height: 200,
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data == YT.PlayerState.PLAYING && !done) {
              setTimeout(() => {
                window.player.stopVideo();
              }, 6000);
              done = true;
            }
          },
          onError: () => {}
        }
      });
    }
  }


  render() {
    return (
      <div className={`pane ${styles.mainPanel}`}>
        <TopBar />
        <div id="player" className={styles.player}></div>
        <Table />
      </div>
    );
  }
}

export default MainPanel;
