import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <h1 className='text-[100px] font-semibold '>Our Work</h1>
        {children}
    </div>
  )
}

export default layout