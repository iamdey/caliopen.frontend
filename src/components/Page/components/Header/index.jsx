import React, { Component } from 'react';
import { Link } from 'react-router';
import Presenter from './presenter';
import SearchField from './components/SearchField';
import UserMenu from './components/UserMenu';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchAsDropdown: false,
    };
    this.handleClickToggleSearchAsDropdown = this.handleClickToggleSearchAsDropdown.bind(this);
    this.isAuthenticated = true;
  }

  handleClickToggleSearchAsDropdown() {
    this.setState({
      searchAsDropdown: !this.state.searchAsDropdown,
    });
  }

  render() {
    return (
      <Presenter
        brand={children => (<Link to="/">{children}</Link>)}
        searchAsDropdownToggler={(props, children) => (
          <button
            {...props}
            onClick={this.handleClickToggleSearchAsDropdown}
          >{children}</button>
        )}
        searchAsDropdown={this.state.searchAsDropdown}
        search={<SearchField />}
        user={this.isAuthenticated ? <UserMenu /> : <a href="/auth/login">{'header.menu.signin'}</a>}
      />
    );
  }
}

export default Header;
