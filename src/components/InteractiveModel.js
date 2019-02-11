import React, { Component } from 'react';

class InteractiveModel extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onStateChange(e);
  }

  makeLabels = () => {
    /* This function iterates over all the data to return the corresponding group, box and label for each item */
    const { data } = this.props;

    return (<g id="states">
      { data.states.map((state, index) => (
        <g 
          id={`${state.id}-group`} 
          key={index}
          onClick={(e) => this.handleChange(state, e)}
        >
            <rect 
              x={state.locationX} 
              y={state.locationY}
              height={state.height}
              rx="4"
              ry="4"
              width={state.width}
              className={`state-box ${state.id}-box`}
            />
            <text 
              x={(state.width / 2) + state.locationX} 
              y={12 + state.locationY}
              textAnchor="middle"
            >{ state.name.map((name, nameIndex) => (
              <tspan 
                key={nameIndex}
                x={(state.width / 2) + state.locationX} 
                dy={(this.lineOffset(nameIndex, 1.2)) + 'em'}
              >{name}</tspan>
            )) }</text>
        </g>
      ))}
      </g>);
  }

  /* text attributes dont support line breaks so this function is
    used for calculating the offset of the line being printed */
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
      <svg className="interactive-model" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
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
