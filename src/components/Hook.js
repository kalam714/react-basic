
import React, {  useState } from "react";
const Hook = ()=>{
   const [bookState,setBookState]= useState({
        books : [
            {name:'Dance of Dragon',wirtten_by:'E V Edward'},
            {name:'Ice and Dragon',wirtten_by:'Z.k Minowk'},
            {name:'Fire and Dragon',wirtten_by:'Zorz Martin'}
        ]
    })
    const clickHandler = () =>{
        setBookState({
            books : [
                {name:'Dance of Dragon 2',wirtten_by:'E V Edward'},
                {name:'Ice and Dragon 2',wirtten_by:'Z.k Minowk'},
                {name:'Fire and Dragon 2',wirtten_by:'Zorz Martin'}
            ]
        })

    }
    return ( 
        <div>
    <button  onClick={clickHandler}>Click Here</button>
    <h5>I love to read {bookState.books[0].name} Written By {bookState.books[0].wirtten_by} </h5>
    <h5>I love to read {bookState.books[1].name} Written By {bookState.books[1].wirtten_by} </h5>
    <h5>I love to read {bookState.books[2].name} Written By {bookState.books[2].wirtten_by} </h5>

    </div>
    )
}
export default Hook