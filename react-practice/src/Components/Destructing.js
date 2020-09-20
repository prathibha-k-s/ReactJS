import React from 'react'

class Name extends React.Component{
 //Destructuring within render()

 
    render(){
        const { name,id } =this.props
        return<div>
      <h1> hello my name is {name}</h1> 

        </div>
    }
}

export default  Name