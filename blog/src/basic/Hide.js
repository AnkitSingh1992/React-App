import React from 'react'

class Hide extends React.Component {

    constructor() {
        super()
        this.state = {
            show: true
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.show ?
                        <h1>Hide show Example</h1>
                        : null
                }

                <button onClick={() => { this.setState({ show: !this.state.show }) }}> Hide/Show  </button>
            </div>
        )
    }
}

export default Hide