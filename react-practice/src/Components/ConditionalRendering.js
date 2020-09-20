import React from 'react'

class Greeting extends React.Component{
    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }


    //1. if else condition
    // render(){
    //     if(this.state.isLoggedIn){
    //     return<div>
    //       <h1> Welcome Prathibha</h1>
    //     </div>
    //     }
    //     else {
    //         return<div>
    //       <h1> Welcome Borra</h1>
    //     </div>
    //     }
//}


    //2.storing inside a variable
    // render(){
    //     let message
    //     if(this.state.isLoggedIn){
    //         return <div> Welcome Prathibha</div>
    //     }
    //     else{
    //         return <div> Welcome Borra</div>
    //     }
    //     return <div> {message}</div>
    // }


    //3. using ternary operate
    // render(){
    //     return this.state.isLoggedIn? <div>Welcome Prathibha</div>:<div>Welcome Borra</div>
    // }

    //4. Shortcircuit opertaor-
    render(){
        return  this.state.isLoggedIn && <div>Welcome Prathibha</div>
    
    }
    }

export default Greeting