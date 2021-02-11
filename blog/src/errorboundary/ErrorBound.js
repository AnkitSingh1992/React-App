import React from 'react'

export default class ErrorBound extends React.Component {
    constructor() {
        super()
        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError() {
        return { error: true }
    }

    render() {
        return (<div>
            {
                this.state.error ? <h1>Custom Error handling</h1> : this.props.children
            }

        </div>)
    }
}