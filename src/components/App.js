import React from 'react';
import './App.css';
import Title from './Title';
import Container from './Container'


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Title/>
        <Container/>
      </div>
    );
  }
}

export default App;
