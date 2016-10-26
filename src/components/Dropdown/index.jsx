import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './style.scss';

export const DropdownController = ({ toggle, children, ...props }) => (
  <button
    data-toggle={toggle}
    {...props}
  >{children}</button>
);

DropdownController.propTypes = {
  toggle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class Dropdown extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-new
    new Foundation.Dropdown(jQuery(`#${this.props.id}`), {});
  }

  render() {
    const className = classnames('m-dropdown', this.props.className, {
      bottom: this.props.modifiers.bottom,
    });

    return (
      <div id={this.props.id} className={className}>
        {this.props.children}
      </div>
    );
  }
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  modifiers: PropTypes.shape({ bottom: PropTypes.bool }),
};

export default Dropdown;
