import React from 'react'

class LifeCycleB extends React.Component{
    constructor(){
        super()
            this.state={
               name: 'saanvi'
            }
        console.log(" child constructor");
    }
    static getDerivedStateFromProps(state, props){
        console.log(" child getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log(" child componentDidMount")
    }
     shouldComponentUpdate(){
         console.log(" child shouldComponentUpdate")
         return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(" child getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps, prevState){
        console.log(" child componentDidUpdate")
    }


    render(){
        console.log(" child render")
        return <div> LifeCycle B </div>
    }
}
export default LifeCycleB