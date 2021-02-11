import  React from 'react'
import  PropDataType  from './propdatatype' 

export default class Propstype  extends React.Component{
    render(){
        return(<div>
            <h1>Props component</h1>
            <PropDataType age={20} name="anil"/>
        </div>)
    }
} 