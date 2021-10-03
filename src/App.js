// import React,{useState} from "react";
import React,{Component} from "react";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'


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
  //   //  username:'',
  //   //  email:'',
  //   //  adress:'',
  //   email:'',
  //   password:'',
  //   error:'',
  //   errorEmail:'',
  //   errorPassword:'',
  //   desc:'',
  //   kdrama:'',
       count:0

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
  setCount=()=>{
    this.setState({count:this.state.count +1})
  }

  // formSubmit = (e)=>{
  //   e.preventDefault()
  //   if(this.validate()){
  //     alert('login information matched with database')

  //   }
  // }
  render(){
    // const movies=['Inception','Endgame','Infinity War','Thor']
    // const names=movies.map((name,id)=>{
    //   return <li>{id+1} {name}</li>
    // })
    // const names=[
    //   {name:'Kalam Ahmed', age:22, cgpa:3.20},
    //   {name:'Imran Ahmed', age:24, cgpa:3.10},

    //   {name:'Faysal Fokir', age:22, cgpa:3.30},

      
    // ]
    // const items=names.map((item,id)=>{
    //   return <li>
    //     Name:{item.name}    Age:{item.age}     CGPA:{item.cgpa} 
    //     <button class='btn btn-primary'>Update</button> || <button btn btn-danger>Delete</button>
    //   </li>
    // })

    return (
      <div className="App"> 
        <h1>System Time {new Date().toLocaleTimeString()}</h1>
        <strong>Coount Number : {this.state.count}</strong><br></br>
            <button onClick={this.setCount}>Count</button>
        
        
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
         
           {/* <h1>Movie List</h1>
           {names} */}
           {/* <h1>Student List</h1>
           {items} */}

{/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      Kalam Ahmed
    >
      <Nav.Link href="#action1">About Me </Nav.Link>
      <Nav.Link href="#action2">Post</Nav.Link>
      <Nav.Link href="#action2">Project</Nav.Link>


      
      
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}
{/* <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb> */}
         </div>
        
    )
  }


}
export default App;
// export const App = ()=>{
//  const [count,setCount]=useState(0)
//   return (
//     <div>
//               <h1>System Time {new Date().toLocaleTimeString()}</h1>
//             <strong>Coount Number : {count}</strong><br></br>
//             <button onClick={()=>{setCount(count+1)}}>Count</button>

//     </div>
//   )
// }
