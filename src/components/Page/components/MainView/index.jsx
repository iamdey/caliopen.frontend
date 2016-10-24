import { PropTypes } from 'react';
import mainView from './presenter';

const MainViewContainer = ({ header, nav, callToAction, flashMessage, children }) =>
  mainView(header, nav, callToAction, flashMessage, children);

MainViewContainer.propTypes = {
  header: PropTypes.element.isRequired,
  nav: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  callToAction: PropTypes.element.isRequired,
  flashMessage: PropTypes.element.isRequired,
};

export default MainViewContainer;
