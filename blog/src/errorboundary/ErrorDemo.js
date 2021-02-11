import React from 'react'

import User  from './User'
import ErrorBound from './ErrorBound'
export default class ErrorDemo extends React.Component {
    render() {
       
        return (
            <ErrorBound>
                <User />
            </ErrorBound>
            )
    }
}