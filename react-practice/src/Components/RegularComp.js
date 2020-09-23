import React from 'react'

class RegComp extends React.Component{
    render(){
        console.log("RegComp component");
        return <div>
            RegComp {this.props.name}

        </div>
    }
}
export default RegComp