import React from 'react'

class  RefDemo extends React.Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
        this.cbref=null
        this.setCbRef=element=>{
            this.cbref=element    //it directly acces the element so no  need of current
        }
    }
    componentDidMount(){
        // if(this.cbref){
        //     this.cbref.focus()   //both are possible
        // }
        this.cbref.focus()

        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    onClickHandler=()=>{
        alert(`${this.inputRef.current.value}  ${this.cbref.value}`)
    }
    render(){
        return<div>
              <input type="text" ref={this.setCbRef}/>
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.onClickHandler}>Click</button>
        </div>
    }
}
export default RefDemo  