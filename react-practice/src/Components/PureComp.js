import React from 'react'

class PureComp extends React.PureComponent{
    render(){
        console.log("pure component");
        return <div>
            PureComponent {this.props.name}
        </div>
    }
}
export default PureComp