import React from 'react'

class FormElements extends React.Component{
    constructor(){
        super(); 
        this.state={
           username:'',
           comments:'',
           topic:'React'
        }

    }

    changeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    CommentChanges=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
   handleSubmit=(event)=>{
       alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
       event.preventDefault();
   }
    render(){
       // const {username, comments, topic} =this.state  - destructure (code cleanup) now we can only use those variables  
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
            <label>Enter your name</label>
            <input type="text" value={this.state.username} onChange={this.changeUsername}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.CommentChanges}></textarea>
        </div>
        <div><label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Veu">Veu</option>
        </select>
        
        <button type="submit">Submit</button>
        </div>
        </form>
        )
    }
}
export default FormElements
