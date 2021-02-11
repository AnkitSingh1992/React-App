import React  from 'react'
import '../resources/custom.css'

export  default function  style (props){

  const h2={
      color:'green',
      fontSize:'36px'
  }

  const h3={
    color:'red',
    fontSize:'36px'
}
    return(
        <div>
            <h1 className="header">global  style </h1>
            <h1 style={props.data=="apply"?h2:h3 }>inline style </h1>
        </div>
    )
}