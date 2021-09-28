import React from 'react';
import './App.css';
import Title from './Title';
import InputContainer from './InputContainer'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Title/>
        <InputContainer/>
      </div>
    );
  }
}

export default App;
