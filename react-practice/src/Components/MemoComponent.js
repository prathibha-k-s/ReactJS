import React from 'react'

function MemoComp({name}){
    console.log("Memo component")
    return <div>
        MEmo component {name}
    </div>
}

export default React.memo(MemoComp)