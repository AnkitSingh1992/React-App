import React from 'react'

class Controlled extends React.Component {

     constructor(){
         super()
        
            this.state={
                name:"",
                pass:""
            } 

}


  submitHandler(){
      let value = this.state.name+"::::"+this.state.pass
      alert(value)
  }
  
    render(){
        return(<div>
            <h1>Controlled</h1>
            <form>         
             <input type ="text" placeholder="enter email" onChange={(event)=>{this.setState({name:event.target.value})}}/><br/>
             <br />
             <input type="password" placeholder="enter password" onChange={(event)=>{this.setState({pass:event.target.value})}}/> <br/> <br/>
             <button onClick={()=>{this.submitHandler()}} type="submit">submit</button>
             </form>
         
        </div>)
    }

}
export default  Controlled