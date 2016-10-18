import React, { PropTypes } from 'react';
import PageContainer from './components/PageContainer';
import MainViewContainer from './components/MainViewContainer';
import OffCanvas from './components/OffCanvas';

const Page = props => (
  <PageContainer>
    <OffCanvas left={<navigation-alt />}>
      <MainViewContainer
        header={
          <header>
            <button
              className="l-header__menu-icon menu-icon"
              type="button"
              data-toggle="left_off_canvas"
            />
          </header>
        }
        nav={<navigation />}
        callToAction={<call-to-action />}
        flashMessage={<flash-message-container />}
      >{ props.children }</MainViewContainer>
    </OffCanvas>
  </PageContainer>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
