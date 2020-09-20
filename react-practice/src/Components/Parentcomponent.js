import React from 'react'
import ChidlComponent from './ChildComponent'

class ParentComponent extends React.Component{
    constructor(){
        super();
        this.state={
            name:'Parent'
        }
        this.GreetParent=this.GreetParent.bind(this)
    }

    //here we are not using any props or this object to access the value which is passed from child component.
    GreetParent(childName){
        alert(`hello ${this.state.name} from ${childName}`)
    }
    render(){
        return <div>
  <ChidlComponent GreetHandler={this.GreetParent}></ChidlComponent>
        </div>
    }
}
export default ParentComponent