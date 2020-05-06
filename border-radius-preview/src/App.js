import React, {useState} from 'react';
import './App.css';

function App() {
  const root = document.documentElement;
  const [radius, setRadius] = useState(0);
  
  function handleRadius(){
    root.style.setProperty('--bd-rd', radius);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1> Border Radius Preview </h1>
      </header>

      <section>
        <textarea value={`Radius=${radius}px`} readOnly onChange={handleRadius()}/>
        <br/>
        <label>Border Radius </label>
        <input min="0" max="105" value={radius} onChange={e => setRadius(e.target.value)}/>
      </section>

    </div>
  );
}

export default App;