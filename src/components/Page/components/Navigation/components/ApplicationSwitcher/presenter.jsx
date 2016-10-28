import React, { PropTypes } from 'react';
import { Link } from '../Navbar';
import BaseLink from '../../../../../Link';
import Icon from '../../../../../Icon';
import Dropdown, { DropdownController } from '../../../../../Dropdown';
import VerticalMenu, { VerticalMenuItem } from '../../../../../VerticalMenu';
import './style.scss';

const Presenter = ({
  applications,
  currentApplication,
  isDropdownOpen = false,
  onDropdownToggle,
}) => (
  <div className="m-application-switcher">
    <Link to={currentApplication.route}>
      <Icon type={currentApplication.icon} /> {`header.menu.${currentApplication.name}`}
    </Link>
    <DropdownController
      toggle="co-application-switcher"
      className="dropdown-float-right m-application-switcher__toggler"
    >
      <span className="show-for-sr">{'application_switcher.action.choose'}</span>
      <Icon type={isDropdownOpen ? 'caret-up' : 'caret-down'} />
    </DropdownController>
    <Dropdown
      id="co-application-switcher"
      closeOnClick
      raw
      position="bottom"
      className="m-application-switcher__dropdown"
      onToggle={onDropdownToggle}
    >
      <VerticalMenu>
        {
          applications.filter(app => app !== currentApplication)
            .map((application, key) => (
              <VerticalMenuItem key={key}>
                <BaseLink to={application.route} modifiers={{ button: true, expanded: true }}>
                  <Icon type={application.icon} /> {`header.menu.${application.name}`}
                </BaseLink>
              </VerticalMenuItem>
            ))
        }
      </VerticalMenu>
    </Dropdown>
  </div>
);

Presenter.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentApplication: PropTypes.shape({}).isRequired,
  isDropdownOpen: PropTypes.bool,
  onDropdownToggle: PropTypes.func,
};

export default Presenter;
