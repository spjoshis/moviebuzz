import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import env from '../config'

/**
 * Movie card for home page
 * @param {*} props 
 */
const MovieCard = props => {
  const movie = props.movie;
  const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div className="col-md-3 box-card">
      <Link to={`/movie/${movie.id}`} className="preview-link">
        <img src={`${env.CDN_PATH}/w200${movie.poster_path}`} alt={movie.title} />
        <b>{movie.title}</b><span className="float-right"><i className="ion-star text-warning"></i>  {movie.vote_average}</span>
        <div className="font-8">
          <span>{(new Date(movie.release_date)).toLocaleDateString('en-US', DATE_OPTIONS)}</span>
        </div>
      </Link>
    </div>
  );
}

export default connect(() => ({}))(MovieCard);
