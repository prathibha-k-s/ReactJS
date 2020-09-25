import React from 'react'
import FocusInput from './FocusInputChild'

class FocusParent extends React.Component{
    constructor(props){
        super(props)
        this.inputRefFocus=React.createRef()
    }
    clickHandler=()=>{
       
        this.inputRefFocus.current.focusHandler()
    }
    componentDidMount(){
        console.log(this.inputRefFocus)
    }
    render(){
        return<div>
            <FocusInput ref={this.inputRefFocus}></FocusInput>
            <button onClick={this.clickHandler}>GetFocus</button>
        </div>
    }
}
export default  FocusParent