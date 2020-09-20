import React from 'react'

//there are 4 ways to in event Binding 
class EventBinding extends React.Component{
    constructor(){
        super();
        this.state={
            message:"hello"
        }
        this.changeMessage=this.changeMessage.bind(this)  //only for third approach
    }
    //this method can be used for all the first 3 ways
    // changeMessage(){
    //     this.setState({
    //      message:'BYE'
    //     })
    // }


    //first approach -using bind method in render
    // render(){
    //     return <div>
    //         <p>{this.state.message}</p>
    //         <button onClick={this.changeMessage.bind(this)}>button</button>
    //     </div>
    // }

    // second approach -most suitable when you dont have to nest any child component 
    // render(){
    //     return <div>
    //         <p>{this.state.message}</p>
    //         <button onClick={ () =>this.changeMessage()}>Click</button>
    //     </div>
    // }

    //third approch - binding the handler in class construcotr line. 10 implement only for this approach (most preferred way)
    // render(){
    //         return <div>
    //             <p>{this.state.message}</p>
    //             <button onClick={this.changeMessage}>button</button>
    //         </div>
    //     }
    
    //fourth approach using arrow function in method definition
    changeMessage = () =>{
this.setState({
    message:'BYE'
})
}

    

    
    render(){
        return<div>
            <p>{this.state.message}</p>
            <button onClick={this.changeMessage}>button</button>
        </div>
    }

}
export default EventBinding