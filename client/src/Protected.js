import React, { useEffect } from 'react'

let login = true;

const Protected = (props) => {
    const {component} = props


    useEffect(() => {
        if (login) {
            
        }

    },[])
  return (
    <div>
       {component}</div>
  )
}

export default Protected