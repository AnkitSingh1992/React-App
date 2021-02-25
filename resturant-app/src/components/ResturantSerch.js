import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
  class ResturantSerch extends Component {
      constructor(){
          super()
          this.state={
              serchData:null
          }
      }
      serch(key){
         
          fetch("http://localhost:3000/resturant?q="+key).then((res) => {
            res.json().then((result) => {
             
               this.setState({serchData:result})
            })
        })
      }
    render() {
        return (
            <div>
                <h1>ResturantSerch</h1>
                <input type="text" placeholder="serch" onChange={(event)=>this.serch(event.target.value)}/>
                {
                    this.state.serchData ?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Email</th>                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.serchData.map((item, i) =>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.email}</td>                                      

                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    : <p>Record not found</p>
            }
                
            </div>
        );
    }
}

export default ResturantSerch;