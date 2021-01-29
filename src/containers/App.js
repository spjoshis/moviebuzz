import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { push } from 'react-router-redux';

import { APP_LOAD, REDIRECT } from '../constants/actionTypes';

import agent from '../utils/api';
import { store } from '../store';

// Pages
import Movie from '../pages/Movie';
import Home from '../pages/Home';
import Header from './Header';
import Footer from './Footer';

/**
 * Main component of App
 */
class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/movie/:id" component={Movie} />
            </Switch>
          
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName} />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
