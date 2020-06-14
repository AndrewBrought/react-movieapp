import React from 'react';
import logo from './logo.svg';
import './App.css';
import backgroundImg from './cinema.jpg';


function App() {  //combining class component and render method
  return (
    <div className="App">
      <img src={backgroundImg} alt="backgroundImage" />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}



export default App;
