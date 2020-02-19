import React, { useState } from 'react';

import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  return (
    <div className="App">
      
      <div className="controls">
      <label>Horizontal Length</label>
    <p class="range-field">
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
    
    </p>
  
      </div>
      <div className="output"></div>
    </div>
  );
}

export default App;
