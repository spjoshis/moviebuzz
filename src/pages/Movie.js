import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import marked from 'marked';

import agent from '../utils/api';
import { getContent } from '../utils/translator';

import { MOVIE_PAGE_LOADED, MOVIE_PAGE_UNLOADED } from '../constants/actionTypes';
import env from '../config'

/**
 * Movie details component
 */
class Movie extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Movies.get(this.props.match.params.id),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log('this.props', this.props.movie)
    if (!this.props.movie) {
      return <div className="container">
        <p className='text-center'>{getContent('loading')}</p>
      </div>
    }

    if (this.props.movie.id === 0) {
      return <div className="container no-movie">
        <h1 className='text-center'>{getContent('no-movie')}</h1>
      </div>
    }

    const movie = this.props.movie
    const markup = { __html: marked(movie.overview, { sanitize: true }) };
    const DATE_OPTIONS = { year: 'numeric', month: 'long', day: 'numeric' };
    const YEAR_OPTIONS = { year: 'numeric' };
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1 className="movie-header">{movie.title} ({(new Date(movie.release_date)).toLocaleDateString('en-US', YEAR_OPTIONS)})</h1>
            <div className="rattings">
              <span className="float-right"><i className="ion-star text-warning"></i>  {movie.vote_average} / 10</span>
            </div>
            <div>
              {(new Date(movie.release_date)).toLocaleDateString('en-US', DATE_OPTIONS)} (
                {
                  movie.production_countries.map((country, idx) => {
                    return <span key={country.name}>{country.name}{idx !== movie.production_countries.length-1 ? ', ' : ''}</span>
                  })
                }
              )&nbsp;|&nbsp;{
                movie.spoken_languages.map((production, idx) => {
                  return <span key={production.name}>{production.name}{idx !== movie.spoken_languages.length-1 ? ', ' : ''}</span>
                })
              }
            </div>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img alt={movie.title} src={`${env.CDN_PATH}/w400${movie.poster_path}`} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="row article-content">
                <div className="col-xs-12">
                  <b>{movie.tagline}</b>
                  <div>
                    <ul className="tag-list">
                      {
                        movie.genres.map(tag => {
                          return (
                            <li
                              className="tag-default tag-pill tag-outline"
                              key={tag.id}>
                              {tag.name}
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                  <div dangerouslySetInnerHTML={markup}></div>
                  <hr />
                  <div>
                    <b>{getContent('productions')}</b>: {
                      movie.production_companies.map((production, idx) => {
                        return <span key={production.id}>{production.name}{idx !== movie.production_companies.length-1 ? ', ' : ''}</span>
                      })
                    }
                  </div>
                  <br />
                  <Link to="/" className="btn btn-primary btn-sm float-right">
                    {getContent('back')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.movie
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: MOVIE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: MOVIE_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
