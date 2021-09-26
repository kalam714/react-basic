import React from "react";

import './App.css';
// import Hi from './components/Functional'
// import Hellow from "./components/Class";
// import Hook from "./components/Hook";
import Bind from "./components/Bind";


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <h2> {new Date().toLocaleTimeString()}.</h2>

       {/* <h2>Hi kalam Ahmed</h2> */}

       {/* <Hi name='Biriyani' coz='my most fav'/>
       <Hi name='Sea Fish' coz='I love it'/>
       <Hi name ='BBQ Piza' coz='it is awesome'/> */}
       {/* <Hi/>
       <Hellow/> */}
       {/* <Hellow/> */}
       {/* <Hook/> */}
       <Bind/>
      </header>
    </div>
  );
}

export default App;
