import React, { useEffect } from 'react'

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../contexts/admin.context';



const Protected = (props) => {
  const navigate = useNavigate();
 
  const { admin } = useContext(AdminContext);

    const {component} = props


    useEffect(() => {
        if (!admin) {
          navigate("/admin");

        }

    },[])
  return (
    <div>
       {component}</div>
  )
}

export default Protected