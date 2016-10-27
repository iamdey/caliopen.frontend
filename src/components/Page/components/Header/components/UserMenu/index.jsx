import React, { Component } from 'react';
import Presenter from './presenter';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Foo',
        isDropdownOpen: false,
      },
    };
  }

  render() {
    return (
      <Presenter
        user={this.state.user}
        onDropdownToggle={(isDropdownOpen) => {
          this.setState({ isDropdownOpen });
        }}
        isDropdownOpen={this.state.isDropdownOpen}
      />
    );
  }
}

export default UserMenu;
