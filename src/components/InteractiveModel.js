import React, { Component } from 'react';

class InteractiveModel extends Component {
  makeLabel = () => {
    const { data } = this.props;

    console.log(data);
  };

  render() {
    const { svgHeight, svgWidth } = this.props;

    return (
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {this.makeLabel()}
      </svg>
    );
  }
}
InteractiveModel.defaultProps = {
  data: [],
  svgHeight: 600,
  svgWidth: 800,
}

export default InteractiveModel;
