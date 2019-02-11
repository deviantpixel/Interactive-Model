import React, { Component } from 'react';

class ModelDescription extends Component {
  constructor(props) {
    super(props); //TODO is this needed
  }

  getDescription = () => {
    // TODO refactor to separate component
    if (typeof this.props.currentState.id !== "undefined") {
      return this.props.currentState.name.join(' ');
    }
    else {
      return '';
    }
  }

  render() {
    return (
      <div id="diagram-content">
        {this.getDescription()}
        Component 2
      </div>
    );
  }
}

export default ModelDescription;
