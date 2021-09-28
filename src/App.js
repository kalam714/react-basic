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
  //  state = {
  //   //  username:'',
  //   //  email:'',
  //   //  adress:'',
  //   email:'',
  //   password:'',
  //   error:'',
  //   errorEmail:'',
  //   errorPassword:'',
  //   desc:'',
  //   kdrama:''
  //  }
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
  
  // textGen =(e)=>{
  //   let val= e.target.name
  //   let tarValue=e.target.value
  //   this.setState({[val]:tarValue})

  // } *multiple 
  
  // validate(){
  //   if(!this.state.email>0 && !this.state.password>0){
  //     this.setState({error:'Email and Password fields cannot be empty'})

  //   } else if(!this.state.email >0){
  //     this.setState({emailError:'Email field cannot be empty'})
  //   }else if(!this.state.password >0){
  //     this.setState({passwordError:'Password field cannot be empty'})
  //   }else{
  //     return true
  //   }
  // }

  // formSubmit = (e)=>{
  //   e.preventDefault()
  //   if(this.validate()){
  //     alert('login information matched with database')

  //   }
  // }
  render(){
    const movies=['Inception','Endgame','Infinity War','Thor']
    const names=movies.map((name,id)=>{
      return <li>{id+1} {name}</li>
    })

    return (
      <div className="App"> 
        <h1>System Time {new Date().toLocaleTimeString()}</h1>
        {/* <h4>{this.state.text}</h4> */}
        {/* <form onSubmit={this.textSubmit}> */}

        {/* <h5>{this.state.username}</h5>
        <h5>{this.state.email}</h5>

        <h5>{this.state.address}</h5> */}
{/* 
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
        </form> */}

{/* <h5>{this.state.email}</h5>
<h5>{this.state.password}</h5> */}
{/* <h2> Login System </h2>

        <form onSubmit={this.formSubmit}>
          <strong style={{color:'red'}}>{this.state.error}</strong><br></br>
        <label>Email : </label>
          <input type='email' name='email' onChange={(e)=>{this.setState({email:e.target.value})}}></input><br></br>
              <strong style={{color:'red'}}>{this.state.emailError}</strong><br></br>
          <label>password: </label>
          <input type='password' name='password' onChange={(e)=>{this.setState({password:e.target.value})}}></input><br></br>
          <strong style={{color:'red'}}>{this.state.passwordError}</strong><br></br>
          <textarea onChange={(e)=>{this.setState({desc:e.target.value})}}></textarea><br></br>
          <p>{this.state.desc}</p><br></br><br></br>
          <select onChange={(e)=>{this.setState({kdrama:e.target.value})}}> 
            <option selected disabled>Select Your Fav Kdrama</option>
            <option value='Mouse 2021'>Mouse 2021</option>
            <option value='Whats wrong with secretary kim'>What's Wrong with secretary Kim</option>
            <option value='Its ok to not to be okey'>Its ok to not to be okey</option>

          </select><br></br>
          <h3>My fav kdrama is : {this.state.kdrama}</h3>

            <button type='submit' class='btn btn-success'>Submit</button>
        </form>
         */}
         <div>
           <h1>Movie List</h1>
           {names}

         </div>
        </div>
    )
  }


 }
export default App;