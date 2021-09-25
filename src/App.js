import React from "react";

import './App.css';
import Hi from './components/Functional'
import Hellow from "./components/Class";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Hi kalam Ahmed</h2>
       <Hi/>
       <Hellow/>
      </header>
    </div>
  );
}

export default App;
