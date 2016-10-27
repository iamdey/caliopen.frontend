import React, { PropTypes } from 'react';
import classnames from 'classnames';

const typeAssoc = {
  search: 'fa fa-search',
  user: 'fa fa-user',
  'caret-up': 'fa fa-caret-up',
  'caret-down': 'fa fa-caret-down',
  envelope: 'fa fa-envelope',
  comments: 'fa fa-comments',
  users: 'fa fa-users',
};


const Icon = ({ className, type, ...props }) => {
  const typeClassName = typeAssoc[type] || console.error(`The type "${type}" is not a valid Icon component type`);
  const iconProps = {
    ...props,
    className: classnames(
      className,
      typeClassName
    ),
  };

  return <i {...iconProps} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
