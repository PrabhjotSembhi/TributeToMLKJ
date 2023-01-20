import React from 'react'
import { useState, red } from 'react'


const AdminSignIn = () => {
  const [formFeilds, setFormFeilds] = useState({});

  const AdminUsername = 'SuperAdmin123';
  const AdminPassword = 'SuperPass123';



  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  }

  
  const handleSubmit = (e) => {
    const {username, password} = formFeilds;
    e.preventDefault();

    if (AdminUsername === username && AdminPassword === password) {
      console.log('sigin ho gya')
    }
    else{
      console.log('sigin nhi hoya')

    }


    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' required name='username' onChange={handleChange}/>
        <input type="password" placeholder='password' required name='password' onChange={handleChange} />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default AdminSignIn