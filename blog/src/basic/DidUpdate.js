import React  from 'react'

export default class DidUpdate extends React.Component{

    constructor(){
        super()
        this.state={
            active :null,
            who:null
        }
    }
    componentDidUpdate()
    {
       console.log("componentDidUpdate")
       if(this.state.who == null)
        this.setState({who :  'ankit'})
    }
    render()
    {
        return(
            <div>
                <h1> Component Did Update {this.state.who}</h1>
                <button  onClick={()=>{this.setState({active:"yes"})}}>Activate</button>
            </div>
        )
    }


}