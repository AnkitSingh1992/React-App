import React from 'react'

export default class uploadFile extends React.Component {

    upload(e) {
        const files = e.target.files
        const formdata = new FormData()
        formdata.append('img', files[0])
        fetch("http://localhost:8080/api/store", {
            method: "POST",
            body: formdata
        }).then((res) => {
            res.json().then((result) => {
                console.log("result", result)
            })
        })
    }
    render() {
        return (
            <div>
                <input type="file" onChange={(e) => this.upload(e)} name="img" />
            </div>
        )
    }

}