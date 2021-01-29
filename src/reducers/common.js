import {
  APP_LOAD,
  REDIRECT,
  MOVIE_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
} from '../constants/actionTypes';

import { getContent } from '../utils/translator';

const defaultState = {
  appName: getContent('site-name'),
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case MOVIE_PAGE_UNLOADED:
    case HOME_PAGE_UNLOADED:
    default:
      return state;
  }
};
