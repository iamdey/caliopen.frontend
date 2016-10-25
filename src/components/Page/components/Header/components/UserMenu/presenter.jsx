import React, { PropTypes } from 'react';
import Link from '../../../../../Link';
import VerticalMenu, { VerticalMenuTextItem, VerticalMenuItem, Separator } from '../../../../../VerticalMenu';
import Dropdown, { DropdownController } from '../../../../../Dropdown';

const Presenter = ({ user }) => (
  <div>
    <DropdownController
      toggle="co-user-menu"
      className="l-header__m-link m-link m-link--button float-right"
    >
      <i className="fa fa-user" />
      <span className="show-for-small-only">{user.name}</span>
      <i className="fa fa-caret-down" />
    </DropdownController>
    <Dropdown id="co-user-menu" modifiers={{ bottom: true }}>
      <VerticalMenu>
        <VerticalMenuTextItem>{user.name}</VerticalMenuTextItem>
        <Separator />
        <VerticalMenuItem>
          <Link
            to="/account"
            className="l-header__m-menu__item-content m-menu__item-content"
            modifiers={{ button: true }}
          >{'header.menu.account'}</Link>
        </VerticalMenuItem>
        <VerticalMenuItem>
          <Link
            to="/auth/logout"
            className="l-header__m-menu__item-content m-menu__item-content"
            modifiers={{ button: true }}
          >{'header.menu.signout'}</Link>
        </VerticalMenuItem>
      </VerticalMenu>
    </Dropdown>
    {
      //   <ul
      //   className="l-header__m-menu m-dropdown m-menu bottom"
      //   data-close-on-click="true"
      //   id="co-user-menu__dropdown"
      // >
      //   <li className="l-header__m-menu__item m-menu__item m-menu--vertical__item">
      //     <div className="l-header__m-menu__item-content m-menu__item-content">
      //       {user.name}
      //     </div>
      //   </li>
      //   <li className="m-menu__separator show-for-medium" />
      //   <li className="l-header__m-menu__item m-menu__item m-menu--vertical__item">
      //     <Link to="/account"
      // className="l-header__m-menu__item-content m-menu__item-content m-link">
      //       {'header.menu.account'}
      //     </Link>
      //   </li>
      //   <li className="l-header__m-menu__item m-menu__item m-menu--vertical__item">
      //     <Link
      //       to="/auth/logout"
      //       className="l-header__m-menu__item-content m-menu__item-content m-link"
      //     >{'header.menu.signout'}</Link>
      //   </li>
      // </ul>
    }
  </div>
);

Presenter.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default Presenter;
