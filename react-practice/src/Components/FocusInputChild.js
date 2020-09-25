import React from 'react'


class FocusInput extends React.Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }

    focusHandler=()=>{
        this.inputRef.current.focus()
    }
    render(){
        return<div>
            <input type="text" ref={this.inputRef}></input>
        </div>
    }
}
export default FocusInput

