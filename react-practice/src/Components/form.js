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
      
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            
       
    }
    render(){
        return (
        <form >
            <div>
            <label>Enter your name</label>
            <input type="text" value={this.state.username} onChange={this.changeUsername}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.CommentChanges}></textarea>
        </div>
        <div>topic</div>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Veu">Veu</option>
        </select>
        <div>
        <button onSubmit={this.hadleSubmit}>Submit</button>
        </div>
        </form>
        )
    }
}
export default FormElements
