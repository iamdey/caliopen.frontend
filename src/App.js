import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

const history = (BUILD_TARGET === 'electron') ? hashHistory : browserHistory;

class App extends Component {
  constructor(props) {
    super(props);
    this.history = syncHistoryWithStore(history, this.props.store);
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.history} routes={routes} />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
