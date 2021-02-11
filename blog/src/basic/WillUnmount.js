import React from 'react'
import  User from './User'


export  default class WillUnMount  extends React.Component{

    constructor(){
        super()
        this.state ={
            toggle : true
        }
    }
     render(){
         return(
             <div>
                 <h1>Component will mount</h1>
                 {
                  this.state.toggle?
                  <User />
                  :null
                 }
                 <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
             </div>
         )
     }
 }