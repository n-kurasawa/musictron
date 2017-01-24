import { SEARCH } from './';
import youtube from '../api/youtube';

export default function search(query) {
  return dispatch => {
    dispatch({ type: SEARCH.START_SEARCH });
    youtube.searchApi(query).then(response => {
      dispatch({ type: SEARCH.SUCCESS_SEARCH, items: response.data.items });
    })
    .catch(error => {
      dispatch({ type: SEARCH.FAIL_SEARCH, payload: error });
    });
  };
}
