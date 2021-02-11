import React from 'react'


export default class RefPage extends React.Component {
    constructor() {
        super()
        this.userRef = React.createRef()
    }

   editVal(){
       this.userRef.current.value ="1000"
   }
    render() {
        return (<div>
            <h1>Ref Use</h1>
            <input ref ={this.userRef} name ="user" type="text" />
            <button onClick={()=>this.editVal()}>click me</button>

        </div>)
    }

}