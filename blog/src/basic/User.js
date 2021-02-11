import React  from 'react'
 export  default class  User  extends React.Component{
    
 
    componentWillUnmount()
    {
        alert("User has been deleted")
    }
         render(){
             return(
                 <div>
                    <h1>Users</h1>
                    <ul>
                    <li>Name : Ankit</li>
                    <li>Email :  ankit@gmail.com</li>
                    <li>contact :  8457733835</li> 
                    </ul>
                   
                 </div>
             )
         }
 }