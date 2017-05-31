import React from 'react'
import ReactDOM from 'react-dom'

class Client extends React.Component{
  render(){
    return <div> Hello {this.props.name}!</div>
  }
}
ReactDOM.render(<Client name="George"/>,document.getElementById('main'))

