import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from './redux/actions'

const Login = () => {
  const dispatch = useDispatch()
  const [ data, setData ] = useState()
  const [ loggedIn, setLoggedIn ] = useState(false)

  const handleLoginRequest = async (event) => {
    event.preventDefault();
    const result = await axios.post('user_login', data)
    if( result.status === 200 ){
      setLoggedIn(true)
    }
  }

  if (loggedIn === true) {
    dispatch(login(data.username))
  }

  const handleLoginData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {loggedIn
      ? <h3>Welcome {data.username}</h3> 
      : <form onSubmit={handleLoginRequest}>
          <label>
            Username:
            <input name="username" type="text" onChange={handleLoginData}/>
          </label>
          <label>
            Password:
            <input name="password" type="password" onChange={handleLoginData}/>
          </label>
          <input type="submit" value="Submit" className="button"/>
        </form>
      }
    </div>
  )
}

export default Login;