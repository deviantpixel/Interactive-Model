import React, { Component } from 'react';
import InteractiveModel from './components/InteractiveModel'
import ModelDescription from './components/ModelDescription'
import './App.css';
import statesData from './statesData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {currentState: {}};
  }
  
  handleStateChange(currentState) {
    this.setState({currentState});
  }

  render() {
    const currentState = this.state.currentState;
    return (
      <div className="App">
        <InteractiveModel 
          data={statesData} 
          currentState={currentState}
          onStateChange={this.handleStateChange}
          />
        <ModelDescription currentState={currentState} />
      </div>
    );
  }
}

export default App;
