import React, { Component } from "react";

class Bind extends Component{
    state ={
        name:'kalam ahmed'
    }
    updateName = (e) =>{
        this.setState({
         name:e.target.value
        })
    }

    render(){
        return (
        <div>
            <input type='text' onChange={this.updateName} value={this.state.name}></input>
            <h3>Hellow {this.state.name}</h3>
        </div>
        )
    }

}
export default Bind