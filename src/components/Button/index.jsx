import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './style.scss';

const Button = ({ children, className, modifiers = {}, ...props }) => {
  const buttonProps = {
    ...props,
    className: classnames(
      className,
      'm-button',
      {
        'm-link--plain': modifiers.plain,
        'm-link--hollow': modifiers.hollow,
      }
    ),
  };

  return <button {...buttonProps}>{children}</button>;
};

Button.propTypes = {
  className: PropTypes.string,
  modifiers: PropTypes.shape({ plain: PropTypes.bool, hollow: PropTypes.bool }),
  children: PropTypes.node.isRequired,
};

export default Button;
