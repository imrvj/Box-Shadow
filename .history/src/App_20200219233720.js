import React, { useState } from 'react';

import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(0)
  const [Color, setColor] = useState("black")
  return (
    <>
    <h1>sdsd</h1>
    <div className="App">
     
      <div className="controls">
      <label>Horizontal Length</label>
      <input type="range"  min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)}/>
      <label>Vertical Length</label>
      <input type="range"  min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)}/>
      <label>Blur Length</label>
      <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
      <label>Color </label>
      <input type="color"  min="0" max="200" value={Color} onChange={(e)=>setColor(e.target.value)}/>
     </div>
      <div className="output">
        <div className="Box" style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${Color}`}}></div>
      </div>
    </div>
    </>
  );
}

export default App;
