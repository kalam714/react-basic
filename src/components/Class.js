
import React, { Component } from "react";
import './class.css';
class Hellow extends Component {
    state = {
        books : [
            {name:'Dance of Dragon',wirtten_by:'E V Edward'},
            {name:'Ice and Dragon',wirtten_by:'Z.k Minowk'},
            {name:'Fire and Dragon',wirtten_by:'Zorz Martin'}
        ]
    }
    
    clickHandler = () => {
        // console.log('hellow kalam ahmed')
        // alert('Check Click handler') check click handler
        this.setState({
            books : [
                {name:'Dance of Dragon 2',wirtten_by:'E V Edward'},
                {name:'Ice and Dragon 2',wirtten_by:'Z.k Minowk'},
                {name:'Fire and Dragon 2',wirtten_by:'Zorz Martin'}
            ]
        })
    }
    render(){
        const style = {
            backgroundColor:'blue',
            font:'inherit',
            border:'2px solid maroon',
            padding:'1opx',
            cursor:'pointer'
          


        };
        return ( 
            <div>
        <button style={style}  onClick={this.clickHandler}>Click Here</button>
        <h5 className='test'>I love to read {this.state.books[0].name} Written By {this.state.books[0].wirtten_by} </h5>
        <h5 className='test'>I love to read {this.state.books[1].name} Written By {this.state.books[1].wirtten_by} </h5>
        <h5 className='test'>I love to read {this.state.books[2].name} Written By {this.state.books[2].wirtten_by} </h5>

        </div>
        )

    }

}
export default Hellow