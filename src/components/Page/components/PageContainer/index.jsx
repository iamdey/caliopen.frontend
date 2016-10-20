import { PropTypes } from 'react';
import './style.scss';

const PageContainer = props => props.children;

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
