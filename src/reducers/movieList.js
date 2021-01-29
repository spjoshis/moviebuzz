import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  CHANGE_TAB,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        movies: action.payload,
        totalCount: action.payload.total_pages,
        currentPage: action.payload.page
      };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        movies: action.payload,
        totalCount: action.payload.total_pages,
        tab: null,
        tag: action.tag,
        currentPage: action.payload.page
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        genres: action.payload[0].genres,
        movies: action.payload[1],
        totalCount: action.payload[1].total_pages,
        currentPage: 1,
        tab: action.tab
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        movies: action.payload,
        totalCount: action.payload.total_pages,
        tab: action.tab,
        currentPage: 1,
        tag: null
      };
    default:
      return state;
  }
};
