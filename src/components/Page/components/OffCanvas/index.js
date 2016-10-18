import React, { Component } from 'react';

class OffCanvas extends Component {
  componentDidMount() {
    new Foundation.OffCanvas(jQuery('#left_off_canvas'), {});
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas position-left"
            id="left_off_canvas"
            data-off-canvas
          >{ this.props.left }</div>
          <div className="off-canvas-content" data-off-canvas-content>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default OffCanvas;
