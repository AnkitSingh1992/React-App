import React  from 'react'


export default class User extends React.Component {
    render() {
        if (true) {
            throw new Error("Custom Error")
        }
        return (<div>
            <h1>User component</h1>
        </div>)
    }
}