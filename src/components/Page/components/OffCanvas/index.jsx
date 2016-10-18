import React, { Component, PropTypes } from 'react';

class OffCanvas extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-new
    new Foundation.OffCanvas(jQuery('#left_off_canvas'), {});
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div
            className="off-canvas position-left"
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

OffCanvas.propTypes = {
  left: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};

export default OffCanvas;
