import  React, { useState }  from 'react'

function HooksOne()
{
    const  [count, setCount] = useState(100)
    return(<div>
       <h1>Hooks uses</h1>
        {count} <br/>
       <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>)
}

export  default  HooksOne;