import React from 'react';
import agent from '../utils/api';
import { connect } from 'react-redux';
import { SET_PAGE } from '../constants/actionTypes';
import { getContent } from '../utils/translator';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: SET_PAGE, page, payload })
});

const ListPagination = props => {
  if (props.totalCount <= 1) {
    return null;
  }

  const setPage = page => {
    if(props.pager) {
      props.onSetPage(page, props.pager(page));
    }else {
      props.onSetPage(page, agent.Movies.all(page))
    }
  };

  const goPrev = (ev) => {
    ev.preventDefault();
    setPage(props.currentPage - 1);
  };

  const goNext = (ev) => {
    ev.preventDefault();
    setPage(props.currentPage + 1);
  };

  return (
    <div className="row">
      <div className="col-md-12 text-center">
      <button
          onClick={goPrev}
          key={(props.currentPage-1).toString()}>
          {getContent('load-prev')}
        </button>
        &nbsp;
        <button
          onClick={goNext}
          key={(props.currentPage+1).toString()}>
          {getContent('load-next')}
        </button>
      </div>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
