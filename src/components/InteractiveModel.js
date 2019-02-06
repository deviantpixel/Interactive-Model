import React, { Component } from 'react';

class InteractiveModel extends Component {
  makeLabels = () => {
    /* This function iterates over all the data to return the corresponding group, box and label for each item */
    const { data } = this.props;

    return (<g id="states">
      { data.states.map((state, index) => (
        <g id={`${state.id}-group`} key={index}>
          <a href="/">
            <rect 
              x={state.locationX} 
              y={state.locationY}
              height={state.height}
              rx="4"
              ry="4"
              width={state.width}
              class={`state-box ${state.id}-box`}
            />
            <text 
              x={(state.width / 2) + state.locationX} 
              y={12 + state.locationY}
              text-anchor="middle"
            >{ state.name.map((name, index) => (
              <tspan 
                x={(state.width / 2) + state.locationX} 
                dy={(this.lineOffset(index, 1.2)) + 'em'}
              >{name}</tspan>
            )) }</text>
          </a>
        </g>
      ))}
      </g>);
  }

  lineOffset = (line, spacing) => {
    if (line > 0) {
      return spacing;
    }
    else {
      return 0;
    }
  }

  render() {
    const { svgHeight, svgWidth } = this.props;

    return (
      <svg class="interactive-model" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {this.makeLabels()}
      </svg>
    );
  }
}
InteractiveModel.defaultProps = {
  data: [],
  svgHeight: 300,
  svgWidth: 300,
}

export default InteractiveModel;
