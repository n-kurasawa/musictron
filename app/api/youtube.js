import axios from 'axios';
import config from '../config/'

let player;
export function searchApi(query) {
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

export function setIframe (onReady, onStateChange) {
  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
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

export function cueVideoById(videoId) {
  player.cueVideoById(videoId);
}

export function loadVideoById(videoId) {
  player.loadVideoById(videoId);
}

export function cuePlaylist(playlist) {
  player.cuePlaylist(playlist);
}

export function loadPlaylist(playlist) {
  player.loadPlaylist(playlist);
}

export function playVideo() {
  player.playVideo();
}

export function pauseVideo() {
  player.pauseVideo();
}
