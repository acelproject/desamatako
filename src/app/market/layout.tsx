import React from 'react'

const layout = ({children,modal}:{children:React.ReactNode,modal:React.ReactNode}) => {
  return (
    <>
    {children}
    {modal}
    </>
  )
}

export default layout