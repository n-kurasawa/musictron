import axios from 'axios';

let player;
export function searchApi(query) {
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: query,
      part: 'snippet',
      key: '',
      maxResults: 30,
      videoEmbeddable: true,
      type: 'video',
      videoSyndicated: true
    }
  });
}

export function setIframe () {
  var done = false;
  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
      videoId: '',
      width: 300,
      height: 200,
      events: {
        onReady: (event) => {
          // event.target.playVideo();
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
