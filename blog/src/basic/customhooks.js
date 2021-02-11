import React, { useState } from 'react'
import useTitle from './useTitle'

const Customhooks = () => {
    const [count,setCount] = useState(0)
    useTitle(count)
    return (<div>
        <h1>Custom hooks</h1>
        <button onClick={()=>setCount(count+1)}>clicks</button>
    </div>)
}
export default Customhooks