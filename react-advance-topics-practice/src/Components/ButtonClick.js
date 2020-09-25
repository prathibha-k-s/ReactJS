import React from 'react'
import updatedComponent from './withCounterHOC'

class ButtonCount extends React.Component{

    
    render(){
        const { count , increment }=this.props     //destructing
        return <div>
            <button onClick={increment}>clicked {count} time</button>
            {this.props.name}
        </div>
    }
}
export default updatedComponent(ButtonCount,1)