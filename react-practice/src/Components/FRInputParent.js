import React from 'react'


class FocusParent extends React.Component{
    constructor(props){
        super(props)
        this.inputRefFocus=React.createRef()
    }
    clickHandler=()=>{
       
        this.inputRefFocus.current.focus()
    }
    componentDidMount(){
        console.log(this.inputRefFocus)
    }
    render(){
        return<div>
          <FocusInput ref={this.inputRefFocus}></FocusInput>
          <button onClick={this.clickHandler}>Get Focus</button>
        </div>
    }
}
export default  FocusParent