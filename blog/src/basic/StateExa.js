import React  from 'react'
 class  StateExa  extends React.Component{
     constructor(){
         super();
         this.state ={
             name :'Peter',
             email:'Peter.test.com',
             count:0
         }
     }

     updateState(){
        this.setState ({
            name:'Bruce',
            count :  this.state.count + 1
        })
     }
  render(){
      console.log("Call render")
      return(
          <div>
              <h1>Count  {this.state.count}</h1>
              <h2>Email :  {this.state.email}</h2>
            <button  onClick={()=>{this.updateState()}}>Update name</button>
          </div>
      )
  }
 }
 export  default  StateExa