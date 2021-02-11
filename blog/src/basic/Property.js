import  React  from 'react'

class Property extends React.Component{
  render()
  {
      return(
           <div>
               <h1>{this.props.text.name}</h1>
               <h3>{this.props.data}</h3>
           </div>

      )
  }
}

export default Property;