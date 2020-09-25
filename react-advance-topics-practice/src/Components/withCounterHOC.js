import React from 'react'

const updatedComponent=(OriginalComponent, incrementNumber)=>{
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
            count:prevState.count+incrementNumber
        }
    })
    }
    
    render(){
        return <OriginalComponent count={this.state.count} increment={this.clickHandler} {...this.props}>
     </OriginalComponent>
    }
}
return NewComponent
}

export default updatedComponent