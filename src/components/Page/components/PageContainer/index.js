import './style.scss';
import 'jquery';
import 'foundation-sites';
import React, { Component } from 'react';

class PageContainer extends Component {
  render() {
    return this.props.children;
  }
}

export default PageContainer;
