import React from 'react';
import './style.scss';

const MainView = (header, nav, callToAction, notification, children) => (
  <div className="l-body">
    { header }
    { nav }
    <section role="main">
      <div className="l-body__content">
        { children }
      </div>
    </section>
    <div className="l-call-to-action">
      { callToAction }
    </div>
    { notification }
  </div>
);

export default MainView;
