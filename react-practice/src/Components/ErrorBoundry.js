import React from 'react'

class ErrorBoundry extends React.Component{
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromErrro(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error, info){
       console.log(error)
       console.log(info)

       
    }
    render(){
        if(this.state.hasError){
        return <h1>Something went wrong</h1>
        }
        return this.props.children
    }

}
export default ErrorBoundry