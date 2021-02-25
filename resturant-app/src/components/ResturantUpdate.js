import React, { Component } from 'react';

 class ResturantUpdate extends Component {
     constructor(){
         super()
        this.state = {
            "name": null,
            "address": null,
            "rating": null,
            "email": null,
            "id":null
        }
     }

    componentDidMount(){
        const id =this.props.match.params.id
        fetch("http://localhost:3000/resturant/"+id).then((res) => {
            res.json().then((result) => {
              this.setState({
                  name:result.name,
                  address:result.address,
                  rating:result.rating,
                  email:result.email,
                  id:result.id

              })
              
            })
        })
    }

    update(){
        fetch("http://localhost:3000/resturant/"+this.state.id, {
            method: "Put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json().then((result) => {
                alert("Resturant has been updated")
            })
        })
    }
   
     
    render() {
        console.warn();

        return (
            <div>
                <h1>Resturant Update</h1>

                <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Resturant Name" value={this.state.name}/> <br /><br />
                <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Resturant Address" value={this.state.address} /> <br /><br />
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Resturant Rating" value={this.state.rating}  /> <br /><br />
                <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Resturant email" value={this.state.email}  /> <br /><br />

                <button onClick={() => { this.update() }}>Update Resturant</button>

            </div>
        );
    }
}

export default ResturantUpdate;