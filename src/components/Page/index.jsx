import React, { PropTypes } from 'react';
import './style.scss';
import MainView from './components/MainView';
import OffCanvas from './components/OffCanvas';
import Header from './components/Header';
import Navigation from './components/Navigation';

const PageContainer = props => (
  <OffCanvas leftChildren={<navigation-alt />}>
    <MainView
      header={<Header />}
      nav={<Navigation />}
      callToAction={<call-to-action />}
      flashMessage={<flash-message-container />}
    >{ props.children }</MainView>
  </OffCanvas>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
