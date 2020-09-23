import React from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends React.Component{
    constructor(){
        super()
            this.state={
               name: 'saanvi'
            }
        console.log("constructor1");
    }
    static getDerivedStateFromProps(state, props){
        console.log("getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(" getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState){
        console.log(" componentDidUpdate")
    }
    handleSubmit=(event)=>{
     this.setState({   //when you change(when you update or change) the state value then only update happens 
         name:'Prathibha'
     })
    }

    render(){
        console.log("render")
        return <div> 
            LifeCycleA
            <LifeCycleB></LifeCycleB>
            <button onClick={this.handleSubmit}>Update</button>
            </div>

    }
}
export default LifeCycleA