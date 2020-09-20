import React from 'react'

class Count extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }
    // changeIncrement(){
    //    // this  is without using the previos state value 
    //     this.setState({
    //      count:this.state.count+1
    //     }, ()=> console.log('call back value', this.state.count))
    //     console.log(this.state.count)
    // }

 //using previus state value 
 changeIncrement(){
     this.setState(prevState => ({
         count: prevState.count+1
     }))
     console.log(this.state.count)
 }
incrementFive(){
    this.changeIncrement();
    this.changeIncrement();
    this.changeIncrement();
    this.changeIncrement();
    this.changeIncrement();
}
    render(){
        return <div>
            <h1> Count {this.state.count}</h1>
            <button onClick={() => this.incrementFive()}>Increament</button>
        </div>

    }
}
export default Count