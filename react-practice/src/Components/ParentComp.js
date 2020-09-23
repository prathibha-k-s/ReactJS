import React from 'react'
import MemoComp from './MemoComponent'
import PureComp from './PureComp'
import RegComp from './RegularComp'

class ParentComp extends React.Component
{
    constructor(){
        super()
      this.state={
          name:'Prathibha'
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Prathibha'
            })
        }, 2000)
    }
    render(){
        console.log(" ******************Parent component***************");
        return <div>
            ParentComp
            {/* <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
            <MemoComp name={this.state.name}></MemoComp>
        </div>
    }
}
export default ParentComp