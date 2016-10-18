import React, { Component } from 'react';
import { Link } from 'react-router';
import PageContainer from './components/PageContainer';
import MainViewContainer from './components/MainViewContainer';
import OffCanvas from './components/OffCanvas';

class Page extends Component {
  render() {
    return (
      <PageContainer>
        <OffCanvas left={<navigation-alt></navigation-alt>}>
          <MainViewContainer
            header={
              <header>
                <button
                  className="l-header__menu-icon menu-icon"
                  type="button"
                  data-toggle="left_off_canvas"
                ></button>
              </header>
            }
            nav={<navigation></navigation>}
            callToAction={<call-to-action></call-to-action>}
            flashMessage={<flash-message-container></flash-message-container>}
          >{ this.props.children }</MainViewContainer>
        </OffCanvas>
      </PageContainer>
    );
  }
}

export default Page;
