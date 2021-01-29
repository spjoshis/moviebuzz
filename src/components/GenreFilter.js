import React from 'react';
import agent from '../utils/api';

const GenreFilter = props => {
  const genres = props.genres;
  if (genres) {
    return (
      <div className="tag-list">
        {
          genres.map(genre => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(genre.name, page => agent.Movies.byTag(genre.id, page), agent.Movies.byTag(genre.id));
            };

            return (
              <a
                href=""
                className="tag-default tag-pill"
                key={genre.id}
                onClick={handleClick}>
                {genre.name}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading genres...</div>
    );
  }
};

export default GenreFilter;
