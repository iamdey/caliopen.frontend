import React, { Component } from 'react';
import Presenter from './presenter';

class UserMenu extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: 'Foo',
      },
    };
  }

  render() {
    return (
      <Presenter user={this.state.user} />
    );
  }
}

export default UserMenu;
