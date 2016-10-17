import React, { Component } from 'react';
import { Link } from 'react-router';
import PageContainer from './components/PageContainer';
import MainViewContainer from './components/MainViewContainer';

class Page extends Component {
  render() {
    return (
      <PageContainer>
        <off-canvas>
          <left><navigation-alt></navigation-alt></left>
          <content>
            <MainViewContainer
              header={<header></header>}
              nav={<navigation></navigation>}
              callToAction={<call-to-action></call-to-action>}
              flashMessage={<flash-message-container></flash-message-container>}
            >{ this.props.children }</MainViewContainer>
          </content>
        </off-canvas>
      </PageContainer>
    );
  }
}

export default Page;
