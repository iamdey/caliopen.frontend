import 'jquery';
import { PropTypes } from 'react';
import 'foundation-sites';
import './style.scss';

const PageContainer = props => props.children;

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
