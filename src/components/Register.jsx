import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./home.css";

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [place, setPlace] = useState("")
    const [data, setData] = useState({
        name : "",
        email: "",
        password: "",
        place: ""
    })

    useEffect(() => {

        setData( {
            name: name,email: email, password: password, place: place
        })
      
    }, [name, email, password, place])
    

    const handleRegister = () => {
        
        // const {name, value} = e.target
        setData( {
            name: name,email: email, password: password, place: place
        })

        addUser(data)
    }

    const handleClear = () => {
        setData({
            name : "",
            email: "",
            password: "",
            place: ""
        })
        setName("")
        setEmail("")
        setPassword("")
        setPlace("")
    }

    const addUser = async data => {
        let check = " hello"
        console.log(check, "before")
        check =  await axios.get(`http://localhost:3001/users`)
        // console.log(check, " right after fetch")
        .then( res => {
            // console.log("check",check)
            console.log(res.data, "res.data")
            res.data.forEach( user => {
                if(user.email === data.email){
                    alert("Email already registered")
                    return
                }
            })
        } )
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            place: data.place
        }
        console.log(payload)

        // const res = await axios.post('http://localhost:3001/users', payload);
        // console.log("res.status : ", res.status)
        // handleClear()   

        // const resp = await fetch("http://localhost:3001/users", { method: "POST", 
        //     body: JSON.stringify(payload),
        //     headers: {
        //         "Content-type": "application/json"
        //     }  
        // })
        // .then(() => { 
        //     console.log(1234)
        //     // handleClear()
        // })
        // .catch(err => console.log("error", err))

        
          fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'content-type': 'application/json',
            },
          })

    }

  return (
    <div>

    <h1>Registration</h1>
      <form className='frm'>
        <input className='inp'
          type="text"
          placeholder="Enter Name"
          onChange= { (e) => setName(e.target.value) }
        //   value={name}
        />
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
        <input className='inp'
          type="text"
          placeholder="Enter Place"
          onChange= { (e) => setPlace(e.target.value) }
          value={place}
        />
      </form>
      <Link to="/viewproduct"><button className='commonBtn' onClick={handleRegister}>Submit</button></Link>      
      <button className='commonBtn' onClick={handleClear}>Clear</button>

    </div>
  )
}

export default Register