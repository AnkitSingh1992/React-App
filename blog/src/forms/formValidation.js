import React  from 'react'

class  FormValidation   extends  React.Component{

    constructor(){
        super()
        this.state={
            user:"",
            usererr:"",
            password:"",
            passworderr:""
        }
    }
      valid(){
          if(!this.state.user.includes("@") &&  this.state.password.length<5){
              this.setState({usererr:'Invalid  name',passworderr:'password length shuld be more than 5 '})
          }else if(!this.state.user.includes("@") ){
            this.setState({usererr:'Invalid  name', passworderr:''})
          } else if(this.state.password.length<5){
            this.setState({usererr:'',passworderr:'password length should be more than 5 '})  
          }else{
              return true
          }
      }
    submit(){
        if(this.valid()){
             alert("successfully submitted")
             this.setState({usererr:'',passworderr:''})
        }
      
    }
    render(){
    return(<div className="App">
            <h1>form Validation </h1>
            <input type ="text" name ="user"  onChange={(e)=>{this.setState({user:e.target.value })}}/>
            <p style={{color:"red",  frontSize:"9px"}}>{this.state.usererr}</p>
            <br/>
            <input type ="password"  name ="password"  onChange={(e)=>{this.setState({password:e.target.value})}}/>
                <p style={{color:"red",  frontSize:"9px"}}>{this.state.passworderr}</p>
            <br/>
            <button onClick={()=>this.submit()}>Submit</button>
        </div>)
    }
}

export  default  FormValidation;