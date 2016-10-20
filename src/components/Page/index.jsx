import React, { PropTypes } from 'react';
import PageContainer from './components/PageContainer';
import MainViewContainer from './components/MainViewContainer';
import OffCanvas from './components/OffCanvas';
import Header from './components/Header';

const Page = props => (
  <PageContainer>
    <OffCanvas left={<navigation-alt />}>
      <MainViewContainer
        header={<Header />}
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
