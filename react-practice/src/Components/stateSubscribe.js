import React from 'react'

class Subscribe extends React.Component{
    constructor(){
        super();
        this.state={
          message:'Welcome Visitors'
        }
    }
    changeMessage(){
      this.setState({
          message:'Thank you visitors'
      })

      
    }
render(){
    return<div>
    <h1> {this.state.message}</h1>
    <button onClick={() =>this.changeMessage()}>Subscribe
    </button>
    </div>

}

}

export default Subscribe