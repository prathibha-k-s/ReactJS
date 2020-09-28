import { render } from '@testing-library/react'
import React from 'react'

class ListOfEmployee extends React.Component{
    employee=[
       {
           id:101,
           name:'Prathibha',
           job:'Engineer'

       },
       {
        id:102,
        name:'Jessica',
        job:'Senior Engineer'

    },
    {
        id:103,
        name:'Vishali',
        job:'Architect'

    },
    {
        id:104,
        name:'Aishwarya',
        job:'Manager'

    }
   ]

   employeeList =this.employee.map((employee)=>{
    return <div>
       { employee.name }   {employee.job}
      
        </div>
})
render(){
    return (
        <div>
         {this.employeeList}
        </div>
    )
}
}

export default ListOfEmployee
