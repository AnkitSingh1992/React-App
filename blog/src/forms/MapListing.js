import React  from 'react'

class  MapListing   extends  React.Component{

    constructor(){
        super()
        this.state={
            list:[
                {name:'anil',phone:111,email:"anil@gmail.com"},
                {name:'kaly',phone:222,email:"kaly@gmail.com"},
                {name:'saurabh',phone:333,email:"saurabh@gmail.com"},
                {name:'shivani',phone:444,email:"shivani@gmail.com"},
                {name:'roshan',phone:111,email:"roshan@gmail.com"}
            ]
        }
    }
    render(){
    return(<div>
            <h1>Listing with map</h1>
            {
                this.state.list.map((item)=>
                <div>
                       <span>Name : {item.name} | </span> 
                       <span>Email :{item.email} | </span>   
                       <span>phone :{item.phone}</span>                 
                </div>
             
                )
            }
        </div>)
    }
}

export  default  MapListing;