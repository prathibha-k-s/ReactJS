import React from 'react'
import updatedComponent from './withCounterHOC'

class HoverCount extends React.Component{
   
    
    render(){
        const { count , increment }=this.props     //destructing
        return <div>
            <h1 onMouseOver={increment}>clicked {count} time</h1>
        </div>
    }
}
export default updatedComponent(HoverCount)