import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Post from './components/Post'
import About from './components/about'
import Project from './components/project'
import App from './App'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

export default class header extends Component{
    render(){
        return (

            <Router>
            
            <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/">Kalam Ahmed</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
  
    >
      <Nav.Link><Link  to="/about">About Me </Link></Nav.Link>
      <Nav.Link><Link  to="/post">Post</Link></Nav.Link>

      <Nav.Link><Link  to="/project">Project</Link></Nav.Link>
      {/* <Nav.Link as={Link} to="/about">anywords</Nav.Link>

      <Nav.Link as={Link} to="/post">anywords</Nav.Link>
      <Nav.Link as={Link} to="/project">anywords</Nav.Link> */}
     {/* <Nav.Link><NavLink activeStyle={{color:'orange'}} to="/about">About Us</NavLink></Nav.Link> */}





      
      
    </Nav>
    </Navbar.Collapse>
</Navbar>
</div>
 
 <Switch>
 
 <Route path="/about">
   <About />
 </Route>
 <Route path="/post">
   <Post />
 </Route>
 <Route path="/project">
   <Project />
 </Route>
 <Route path="/">
   <App />
 </Route>
</Switch>
</Router>

        );
    }
}
