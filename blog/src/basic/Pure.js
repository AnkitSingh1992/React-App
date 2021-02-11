import React from 'react'

export default class Pure extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            data: 10
        }
    }

    updateState() {
        this.setState({
            data: 20
        })
    }

    render() {
        console.warn("render is lading")
        return (
            <div>
                <h1>Pure Component</h1>
                <button onClick={() => { this.updateState() }}>update</button>
            </div>
        )
    }
} 