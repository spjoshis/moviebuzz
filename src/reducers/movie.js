import {
  MOVIE_PAGE_LOADED,
  MOVIE_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case MOVIE_PAGE_LOADED:
      return {
        ...state,
        movie: action.payload[0],
        comments: []
      };
    case MOVIE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
