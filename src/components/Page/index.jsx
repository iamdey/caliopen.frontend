import React, { PropTypes } from 'react';
import './style.scss';
import MainView from './components/MainView';
import OffCanvas from './components/OffCanvas';
import Header from './components/Header';

const PageContainer = props => (
  <OffCanvas leftChildren={<navigation-alt />}>
    <MainView
      header={<Header />}
      nav={<navigation />}
      callToAction={<call-to-action />}
      flashMessage={<flash-message-container />}
    >{ props.children }</MainView>
  </OffCanvas>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
