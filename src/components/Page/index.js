import React, { Component } from 'react';
import { Link } from 'react-router';

class Page extends Component {
  render() {
    return (
      <off-canvas>
        <left><navigation-alt></navigation-alt></left>
        <content>
          <div class="l-body">
            <header></header>
            <navigation></navigation>
            <section role="main">
              <div class="l-body__content" ui-view>
                {this.props.children}
              </div>
            </section>
            <div class="l-call-to-action">
              <call-to-action></call-to-action>
            </div>
            (
              // <flash-message-container></flash-message-container>
            )
          </div>
        </content>
      </off-canvas>
    );
  }
}

export default Page;
