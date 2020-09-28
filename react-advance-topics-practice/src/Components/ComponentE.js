import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext' 

class ComponentE extends React.Component{
  static contextType=UserContext    //second approach

    render(){
        return (
            <div>
                Component E context {this.context}
                <ComponentF>
         </ComponentF>
            </div>
           
        )
    }
}

//ComponentE.contextType=UserContext   //first approach
export default ComponentE