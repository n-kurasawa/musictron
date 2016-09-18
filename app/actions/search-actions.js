import { SEARCH } from './';
import { searchApi } from '../api/youtube';

export function search(query) {
  return (dispatch, getState) => {
    dispatch({ type: SEARCH.START_SEARCH });
    searchApi(query).then(function (response) {
      dispatch({ type: SEARCH.SUCCESS_SEARCH, items: response.data.items });
      console.log(response);
    })
    .catch(function (error) {
      dispatch({ type: SEARCH.FAIL_SEARCH, payload: error });
      console.log(error);
    });
  };
}
