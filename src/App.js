import React, { Component } from 'react';
import InteractiveModel from './components/InteractiveModel'
import ModelDescription from './components/ModelDescription'
import './App.css';
import statesData from './statesData.json';

class App extends Component {
  // statesData = () => {
  //   let data = []
    
  //   return data
  // }
  render() {
    return (
      <div className="App">
        <InteractiveModel data={statesData} />
        <ModelDescription />
      </div>
    );
  }
}

export default App;
