import React from 'react';
import { connect } from 'react-redux';

// Utilities
import agent from '../utils/api';
import { getContent } from '../utils/translator';

// Views
import HomeBanner from '../components/HomeBanner';
import GenreFilter from '../components/GenreFilter';
import HomeMainView from '../components/HomeMainView';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../constants/actionTypes';

const Promise = global.Promise;

/**
 * Home component
 */
class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const moviePromise = agent.Movies.all;

    this.props.onLoad(tab, agent.Movies.all, Promise.all([agent.Tags.getAll(), moviePromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <HomeBanner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <HomeMainView />
            <div className="col-md-3">
              <div className="sidebar">
                <p>{getContent('genres')}</p>
                <GenreFilter
                  genres={this.props.genres}
                  onClickTag={this.props.onClickTag} />
              </div>
              <div>
                  <br />
                  <img alt={getContent('ads')} src='images/banner-ads-examples-big-brothers-big-sisters.jpg?VAbFBoHCBtPJC3sXZE.EiQJR8EGdIPZS&itok=HAwGaPRT' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
