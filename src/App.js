import React from "react";

import './App.css';

// import Hi from './components/Functional'
// import Hellow from "./components/Class";
// import Hook from "./components/Hook";
//import Bind from "./components/Bind";
// import Hellow from "./components/Class";


// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//       <h2> {new Date().toLocaleTimeString()}.</h2>

//        {/* <h2>Hi kalam Ahmed</h2> */}

//        {/* <Hi name='Biriyani' coz='my most fav'/>
//        <Hi name='Sea Fish' coz='I love it'/>
//        <Hi name ='BBQ Piza' coz='it is awesome'/> */}
//        {/* <Hi/>
//        <Hellow/> */}
//        {/* <Hellow/> */}
//        {/* <Hook/> */}
//        {/* <Bind/> */}
//        <Hellow/>
//       </header>
//     </div>
//   );
// }

// export default App;
 class App extends React.Component{
   state = {
     username:'',
     email:'',
     adress:'',
   }
  //  textGen = (e)=>{
  //    let value = e.target.value
  //    this.setState({text:value})
  //  } *with onChange method
  // textGen =(e)=>{
  //   let val= e.target.name
  //   let tarValue=e.target.value
  //   this.setState({[val]:tarValue})

  // } *without onChange method
  // textSubmit = (e)=>{
  //   e.preventDefault()
  //   console.log(this.state.text) 
  // }
  
  textGen =(e)=>{
    let val= e.target.name
    let tarValue=e.target.value
    this.setState({[val]:tarValue})

  }
  render(){
    return (
      <div className="App"> 
        <h1>System Time {new Date().toLocaleTimeString()}</h1>
        {/* <h4>{this.state.text}</h4> */}
        {/* <form onSubmit={this.textSubmit}> */}

        <h5>{this.state.username}</h5>
        <h5>{this.state.email}</h5>

        <h5>{this.state.address}</h5>

        <form>
        <div class='form-group'>
          <label>User Name : </label>
          <input type='text' name='username' onChange={this.textGen}></input><br></br>

          <label>Email : </label>
          <input type='text' name='email' onChange={this.textGen}></input><br></br>

          <label>Adress : </label>
          <input type='text' name='address' onChange={this.textGen}></input><br></br>

           <button class='btn btn-primary' type='submit'>Submit</button>

        </div>
        </form>
        </div>
    )
  }


 }
export default App;