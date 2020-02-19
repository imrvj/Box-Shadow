import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Box Shadow</h1>
      <div className="controls">
      <form action="#">
    <p class="range-field">
      <input type="range" id="test5" min="0" max="100" />
    </p>
  </form>
      </div>
      <div className="output"></div>
    </div>
  );
}

export default App;
