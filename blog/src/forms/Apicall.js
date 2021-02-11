import React  from 'react'
export default class Apicall extends React.Component{

    constructor(){
        super()
        this.state ={
            users : null
        }
    }

    componentDidMount(){
        fetch('https://reqres.in/api/users').then((resp)=>{
            resp.json().then((result)=>{
                console.log(result.data)
                this.setState({users :  result.data})
            })
        })
    }


render(){
    return(
        <div  className="App"> 
             <h3>User Listing</h3>
            {
                this.state.users?
                this.state.users.map((item,i)=>
                <div>
                   <p>
                    <table>
                    <tr>
                     <td>{i +1 } </td> 
                     <td>{item.first_name} </td>
                     <td>{item.last_name}</td> 
                     <td>{item.email }  </td>   
                     <td> <img src={item.avatar}/></td>  
                     </tr>
                     </table>
                   </p>
                </div>
                )
                :
                null
            }
        </div>
    )
}

}