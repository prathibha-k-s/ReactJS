import React from 'react'

const FunctionEvent = () => {
  function  clickHandler(){
        console.log('button clicked');
    }
return(
    <div>
        <button onClick={clickHandler}>CLick</button>
    </div>
)
}
export default FunctionEvent