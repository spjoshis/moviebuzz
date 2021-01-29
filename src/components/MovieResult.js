import MovieCard from './MovieCard';
import ListPagination from './ListPagination';
import React from 'react';

/**
 * Movie listing in search result
 * @param {*} props 
 */
const MovieList = props => {
  if (!props.movies) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.movies.length === 0) {
    return (
      <div className="article-preview">
        No movies are here... yet.
      </div>
    );
  }

  return (
    <div className="feed">
      <div className="row box-card-parent">
        {
          props.movies.results.map(movie => {
            return (
              <MovieCard movie={movie} key={movie.slug} />
            );
          })
        }
      </div>
      <ListPagination
          pager={props.pager}
          totalCount={props.totalCount}
          currentPage={props.currentPage} />
    </div>
  );
};

export default MovieList;
