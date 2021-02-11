import React from 'react'

//  class component 

// export  default class EventClass extends React.Component{
//     test(){
//         alert("click  me")
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Event Handing</h1>
//                 <button onClick={()=>this.test()}>Click me</button>
//             </div>
//         )
//     }
// }


//  functional component

export  default  function EventClass(){
 const  testFun =()=>{
        alert("test  fun")
    }
    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={testFun}>Click Me</button>
        </div>
    )
}