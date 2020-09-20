import React from 'react'

const ChidlComponent=(props)=>{
    return <div>
        <button onClick={()=>props.GreetHandler('child')}> Click</button>
    </div>
}

export default ChidlComponent