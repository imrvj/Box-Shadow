import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="controls">
      <label>Horizontal Length</label>
    <p class="range-field">
      <input type="range"  min="-200" max="200" />
    </p>
  
      </div>
      <div className="output"></div>
    </div>
  );
}

export default App;
