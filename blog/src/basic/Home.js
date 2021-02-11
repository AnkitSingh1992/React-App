import React from 'react';

export default function Home(props)
 {
     const red  = ()=>{
              alert("Red function is called")
     }
    return  <div> 
        <h1 onClick={red} >Home compnent </h1>  
        <p>{props.text}</p>          
    </div>
}