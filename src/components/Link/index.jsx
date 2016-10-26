import React, { PropTypes } from 'react';
import { Link as BaseLink } from 'react-router';
import classnames from 'classnames';
import './style.scss';

const Link = ({ children, className, modifiers = {}, ...props }) => {
  const linkProps = {
    ...props,
    className: classnames(
      className,
      'm-link',
      {
        'm-link--button': modifiers.button,
      }
    ),
  };

  return <BaseLink {...linkProps}>{children}</BaseLink>;
};

Link.propTypes = {
  className: PropTypes.string,
  modifiers: PropTypes.shape({ button: PropTypes.bool }),
  children: PropTypes.node.isRequired,
};

export default Link;
