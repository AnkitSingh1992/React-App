import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import {

    Link
} from 'react-router-dom'


class ResturantList extends Component {
    constructor() {
        super()
        this.state = {
            list: null
        }
    }


    delete(id) {
        alert("delete")
        fetch("http://localhost:3000/resturant/" +id, {
            method: "Delete",          
           
        }).then((res) => {
            res.json().then((result) => {
                alert("Resturant has been deleted")
                this.findAll()
            })
        })
    }

    serch(key){
         
        fetch("http://localhost:3000/resturant?q="+key).then((res) => {
          res.json().then((result) => {
           
             this.setState({list:result})
          })
      })
    }

    findAll(){
        fetch("http://localhost:3000/resturant").then((res) => {
            res.json().then((result) => {

                this.setState({ list: result })
            })
        })
    }

    componentDidMount() {
        this.findAll()
    }
    render() {
        return (
            <div>
                <h1>Resturant list</h1>
                <input type="text" placeholder="serch" onChange={(event)=>this.serch(event.target.value)}/><br/><br/>
                {
                    
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th> Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color='orange' /> </Link>
                                                    <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red' />  </span> </td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>please wait .. </p>
                }
            </div>
        );
    }
}

export default ResturantList;