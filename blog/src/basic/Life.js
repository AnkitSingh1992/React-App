import React  from 'react'
 
export  default class  Life extends  React.Component{
    constructor(){
        super()
        console.log("constructor")
    }

    componentDidMount(){
        console.warn('compoent did mount')
    }
    render(){
        console.warn("render  method")
        return(
            <h1>Life Cycle methods</h1>
        )
    }
} 