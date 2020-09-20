import React from 'react'

class ClassEvents extends React.Component{
    clickhandler(){
        console.log('button clicked')
    }
    render(){
    return(
        <div>
            <button onClick={this.clickhandler}>Click</button> 
        </div>
    )
    }
}
export default ClassEvents