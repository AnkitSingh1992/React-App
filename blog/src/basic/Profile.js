import React from 'react'
class Profile extends React.Component {
    constructor() {
        console.warn("Inside constructor")
        super()
    }

    componentDidMount() {
        console.warn("Life cycle method")
    }
    render() {
        return (
            <h1>Profile component</h1>

        )
    }
}

export default Profile;