require('./style.scss');
import React, { Component } from 'react';

class MainViewContainer extends Component {
  render() {
    return (
      <div className="l-body">
        { this.props.header }
        { this.props.nav }
        <section role="main">
          <div className="l-body__content">
            { this.props.children }
          </div>
        </section>
        <div className="l-call-to-action">
          { this.props.callToAction }
        </div>
        { this.props.flashMessage }
      </div>
    );
  }
}

export default MainViewContainer;
