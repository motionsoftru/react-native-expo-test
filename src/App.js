import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Frontend/Greetings/Greetings";

const App = () => (
    <div className="App">
      <header className="App-header">
        <p>
          <Greetings firstName="Vadim" lastName="Baranov" />
        </p>
      </header>
    </div>
);

export default App;
