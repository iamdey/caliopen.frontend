import React, { PropTypes } from 'react';
import Link from '../../../../../Link';
import Icon from '../../../../../Icon';
import VerticalMenu, { VerticalMenuTextItem, VerticalMenuItem, Separator } from '../../../../../VerticalMenu';
import Dropdown, { DropdownController } from '../../../../../Dropdown';

const Presenter = ({ user, isDropdownOpen, onDropdownToggle }) => (
  <div>
    <DropdownController
      toggle="co-user-menu"
      className="float-right"
      modifiers={{ expanded: true }}
    >
      <Icon type="user" />&nbsp;
      <span className="show-for-small-only">{user.name}</span>&nbsp;
      <Icon type={isDropdownOpen ? 'caret-up' : 'caret-down'} />
    </DropdownController>
    <Dropdown id="co-user-menu" position="bottom" closeOnClick onToggle={onDropdownToggle}>
      <VerticalMenu>
        <VerticalMenuTextItem>{user.name}</VerticalMenuTextItem>
        <Separator />
        <VerticalMenuItem>
          <Link to="/account" modifiers={{ button: true, expanded: true }}>{'header.menu.account'}</Link>
        </VerticalMenuItem>
        <VerticalMenuItem>
          <Link to="/auth/logout" modifiers={{ button: true, expanded: true }}>{'header.menu.signout'}</Link>
        </VerticalMenuItem>
      </VerticalMenu>
    </Dropdown>
  </div>
);

Presenter.propTypes = {
  user: PropTypes.shape({}).isRequired,
  isDropdownOpen: PropTypes.bool,
  onDropdownToggle: PropTypes.func,
};

export default Presenter;
