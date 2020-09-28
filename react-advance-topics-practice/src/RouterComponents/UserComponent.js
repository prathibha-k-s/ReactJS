import React from 'react'
import { Prompt, Redirect }from "react-router-dom"

class User extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedin:true
           
        }
    }
    clickHandler=()=>{
        this.setState({
            isLoggedin:true
        })
//this.state.isLoggedin?(<User></User>):(<Redirect to="/"></Redirect>)
    }

    render(){
        

      if(this.state.isLoggedin){
        const { match } = this.props
        return( <div>
            {/* <Prompt when={!this.state.isLoggedin} message={(location)=>{              //this is not working here
            return location.pathname.startsWith('/user') ? 'Are you sure' : true
        }}> </Prompt> */}
            <h1> Hello user {match.params.username}</h1>
            <button onClick={this.clickHandler} >Log in </button>
            
            </div>
            )
      }
      else
      {
         return(
             <div>
                 <Redirect to="/"></Redirect>
            <button onClick={this.clickHandler} >Log in </button>
          </div>
         )
      }
      
    }
}

export default User