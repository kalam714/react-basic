import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const axios = require('axios');

export default class Post extends Component{
    state = {
        posts:[]
    }
    componentDidMount(){
        // alert('check component load')
      //  let thisVar=this
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>{
           //     thisVar.setState({posts:response.data})
           this.setState({posts:response.data})
      
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }

    render(){
        const posts=this.state.posts
        const allPosts=posts.map((post,id)=>{
            return(
                <div>
                    <a href="" key={id}>{post.title}</a><br></br>
                    <p>{post.body}</p>
                </div>
            )
        })

        return(
            <div>
      <Link  to="/create">Create Post</Link>

<div class="media">
  <div class="media-body text-center">
      {allPosts}
  </div>
</div>            </div>
        )
    }
}
