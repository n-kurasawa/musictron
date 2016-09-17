import {SEARCH} from './';
import axios from 'axios';

export function search(query) {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH.START_SEARCH });
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        part: 'snippet',
        key: 'AIzaSyBvwRvxqEgnOCRZjEUiGnTSVSmG1JmVr78',
        maxResults: 30
      }
    })
    .then(function (response) {
      dispatch({ type: SEARCH.SUCCESS_SEARCH, items: response.data.items });
      console.log(response);
    })
    .catch(function (error) {
      dispatch({ type: SEARCH.FAIL_SEARCH, payload: error });
      console.log(error);
    });
  };
}
