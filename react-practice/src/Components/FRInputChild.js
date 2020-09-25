import React from 'react'

const FocusInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type="text" ref={ref}> </input>
        </div>
    )

})
export default FocusInput