import React from 'react'

class UnControlled extends React.Component {

     constructor(){
         super()
         this.name = React.createRef()
         this.pass =  React.createRef()
     }


  submitHandler(event){
      event.preventDefault();
      let  value = this.name.current.value+"::"+this.pass.current.value
      alert(value)
  
  }
  
    render(){
        return(<div>
            <h1>UnControlled</h1>
            <form onSubmit={(event)=>{this.submitHandler(event)}}>         
             <input type ="text" placeholder="enter email" ref={this.name}/><br/>
             <br />
             <input type="password" placeholder="enter password" ref={this.pass}/> <br/> <br/>
             <button type="submit">submit</button>
             </form>
         
        </div>)
    }

}
export default  UnControlled