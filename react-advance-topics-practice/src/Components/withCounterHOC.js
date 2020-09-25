import React from 'react'

const updatedComponent=(OriginalComponent)=>{
class NewComponent extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    clickHandler=()=>{
    this.setState(prevState=>{
        return {
            count:prevState.count+1
        }
    })
    }
    
    render(){
        return <OriginalComponent count={this.state.count} increment={this.clickHandler}>
     </OriginalComponent>
    }
}
return NewComponent
}

export default updatedComponent