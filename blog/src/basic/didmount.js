import  React  from 'react'

export default class didMount extends  React.Component{

     constructor()
     {
         super()
         this.state ={
             data:null
         }
         console.warn("constructor")
     }

     componentDidMount()
     {
       
         this.setState =({ data : "Ankit"});
         console.warn("componentDidMount")
     }

    render()
    {
        console.warn("render")
        return(
            <div>
            <h1>Component Did Mount</h1>
            </div>
        )
    }
} 