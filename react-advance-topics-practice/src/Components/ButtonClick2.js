import React from 'react'

class ButtonClick2 extends React.Component{
   
    render(){
        const  { count , clickHandler } = this.props
        return (
            <button onClick={clickHandler}>Button Clicked {count}</button>
        )
    }
}
export default ButtonClick2