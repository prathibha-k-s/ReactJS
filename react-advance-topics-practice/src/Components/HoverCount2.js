import React from 'react'

class HoverCount2 extends React.Component{
   
    render(){
      const  { count , clickHandler } = this.props
        return (
            
            <h1 onMouseOver={clickHandler}>Button Clicked {count}</h1>
        )
    }
}
export default HoverCount2