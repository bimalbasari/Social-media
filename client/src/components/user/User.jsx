import React, { useState } from 'react'
import Login from './Login'
import Signup from './SignUp'

const User = () => {
    const [account,setAccount]=useState(true)
  return (
    <div>
      {account?<Login setAccount={setAccount}/>:<Signup setAccount={setAccount}/>}
    
    </div>
  )
}

export default User
