import React from 'react'

class WithConterRP extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    clickHandler=()=>{
        this.setState(prevState=>{
            return{
            count:prevState.count+1
            }
        })
    }

    //line.no 22 in one single menthod we pass properties which provides code reusability
    render(){
        return(
           <div>
                {this.props.render(this.state.count, this.clickHandler)}   
           </div> 
        )
    }
}

export default WithConterRP