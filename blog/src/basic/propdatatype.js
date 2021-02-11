import  React from 'react'
import PropTypes from 'prop-types'

 class PropsData  extends React.Component{
    render(){
        return(<div>
            <h1>Props data</h1>
            <h3>{this.props.age}</h3>
            <h3>{this.props.name}</h3>
        </div>)
    }
} 
PropsData.PropsType={
    age:PropTypes.number,
    name:PropTypes.number
}

export default  PropsData  