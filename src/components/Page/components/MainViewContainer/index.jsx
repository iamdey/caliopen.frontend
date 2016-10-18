import React, { PropTypes } from 'react';
import './style.scss';

const MainViewContainer = props => (
  <div className="l-body">
    { props.header }
    { props.nav }
    <section role="main">
      <div className="l-body__content">
        { props.children }
      </div>
    </section>
    <div className="l-call-to-action">
      { props.callToAction }
    </div>
    { props.flashMessage }
  </div>
);

MainViewContainer.propTypes = {
  header: PropTypes.element.isRequired,
  nav: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  callToAction: PropTypes.element.isRequired,
  flashMessage: PropTypes.element.isRequired,
};

export default MainViewContainer;
