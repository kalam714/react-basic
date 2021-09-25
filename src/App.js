import React from "react";

import './App.css';
import Hi from './components/Functional'
import Hellow from "./components/Class";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Hi kalam Ahmed</h2>
       <Hi name='Biriyani' coz='my most fav'/>
       <Hi name='Sea Fish' coz='I love it'/>
       <Hi name ='BBQ Piza' coz='it is awesome'/>
       {/* <Hi/>
       <Hellow/> */}
      </header>
    </div>
  );
}

export default App;
