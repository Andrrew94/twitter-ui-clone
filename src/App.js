import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  axios.get('https://twitter-clone-be.herokuapp.com/tasks').then(res => {
    console.log("response", res.data)
  }).catch(err => {
    console.log("error", err)
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <strong> Turluianu Tedi</strong>
        <strong> Andrei <strong style={{color: "green"}}>Inginer</strong> Sandica</strong>
          TEST
      </header>
    </div>
  );
}

export default App;
