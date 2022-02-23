import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const history = useHistory()

    const handleLogin = async () => {
        let flag = false
        const users = await axios.get('http://localhost:3001/users')
        .then( res => {
            // console.log("res",res)
            console.log(res.data, "res.data")
            res.data.forEach( user => {
                if(user.email === email && user.password === password){
                    flag = true
                }
            })
        } )


        if(flag)
            history.push("/viewproduct");
        else
            alert("Invalid Credentials");
    }

  return (
    <>
        <form className='frm' >
            <h1>LOGIN</h1>
            <input className='inp'
            type="email"
            placeholder="Enter Email"
            onChange= { (e) => setEmail(e.target.value) }
            value={email}
            />
            <input className='inp'
            type="password"
            placeholder="Enter Password"
            onChange= { (e) => setPassword(e.target.value) }
            value={password}
            />
        </form>
        <button className='commonBtn' onClick={handleLogin}>Login</button>
        <Link to="/register" ><button className='commonBtn' >Register</button></Link>
    </>
  )
}

export default Login