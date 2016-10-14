require('./style.scss');
import React, { Component } from 'react';
import { Link } from 'react-router';

class Page extends Component {
  render() {
    return (
      <off-canvas>
        <left><navigation-alt></navigation-alt></left>
        <content>
          <div className="l-body">
            <header></header>
            <navigation></navigation>
            <section role="main">
              <div className="l-body__content">
                {this.props.children}
              </div>
            </section>
            <div className="l-call-to-action">
              <call-to-action></call-to-action>
            </div>
            <flash-message-container></flash-message-container>
          </div>
        </content>
      </off-canvas>
    );
  }
}

export default Page;
