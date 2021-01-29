import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movie from './reducers/movie';
import movieList from './reducers/movieList';
import common from './reducers/common';
import home from './reducers/home';

export default combineReducers({
  movie,
  movieList,
  common,
  home,
  router: routerReducer
});
