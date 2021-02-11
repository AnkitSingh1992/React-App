import React, { useState } from 'react'
import Component2 from './Component2';

const Component1 = () => {
    const  [count, setCount] =useState(0)
    const  [data, setData] = useState(100)
    console.warn("outer component")
    return (
        <div>
            <h1>Memo compoent</h1>
               <Component2 data={data}/>
            <button  onClick={()=>setCount(count+1)}>count</button>
            <button  onClick={()=>setData(data+1)}>data</button>
        </div>
    );
};

export default Component1