import { render } from '@testing-library/react'
import React from 'react'
import './Assigment2.css'

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
    return<tr>
    <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>{employee.job}</td>
    </tr>

               
})

renderTableHeader() {
    let header = Object.keys(this.employee[0])
    return header.map((key, index) => {
       return <th key={this.employeeList.id}>{key.toUpperCase()}</th>
       console(this.header)
      
    
    })
 }
render(){
   
    return (
        <div>
         <table id="employee">
          <tbody id="employee">
          <tr>{this.renderTableHeader()}</tr>
           {this.employeeList}
          </tbody>
      </table>
        </div>
    )
}
}

export default ListOfEmployee
