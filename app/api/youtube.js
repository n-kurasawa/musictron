import axios from 'axios';
import config from '../config/'

class Youtube {
  setIframe (onReady, onStateChange) {
    window.onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('player', {
        width: 300,
        height: 200,
        events: {
          onReady: (event) => {
            if (onReady) {
              onReady(event);
            }
          },
          onStateChange: (event) => {
            if (onStateChange) {
              onStateChange(event);
            }
          },
          onError: () => {}
        }
      });
    }
  }

  searchApi(query) {
    return axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        key: config.youtubeApiKey,
        maxResults: 30,
        videoEmbeddable: true,
        type: 'video',
        videoSyndicated: true
      }
    });
  }

  cueVideoById(videoId) {
    this.player.cueVideoById(videoId);
  }

  loadVideoById(videoId) {
    this.player.loadVideoById(videoId);
  }

  cuePlaylist(playlist) {
    this.player.cuePlaylist(playlist);
  }

  loadPlaylist(playlist) {
    this.player.loadPlaylist(playlist);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}

export default new Youtube();
