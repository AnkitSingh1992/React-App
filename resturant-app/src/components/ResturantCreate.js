import React, { Component } from 'react';

class ResturantCreate extends Component {
    constructor() {
        super()
        this.state = {
            "name": "",
            "address": "",
            "rating": "",
            "email": ""
        }
    }
    create() {
       
        fetch("http://localhost:3000/resturant", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => {
                alert("Resturant has been added")
            })
        })
    }


    render() {
        return (
            <div>
                <h1>Resturant Create</h1>

                <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Resturant Name" /> <br /><br />
                <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Resturant Address" /> <br /><br />
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Resturant Rating" /> <br /><br />
                <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Resturant email" /> <br /><br />

                <button onClick={() => { this.create() }}>Add Resturant</button>

            </div>
        );
    }
}

export default ResturantCreate;