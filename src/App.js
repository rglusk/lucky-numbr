import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='center'>
        <video
          autoPlay 
          loop width="600"
          name="Intro" src="/intro.mov"></video>
      </div>
    );
  }
}

export default App;
