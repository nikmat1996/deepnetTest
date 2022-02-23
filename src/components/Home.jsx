import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <nav >
        <Link to= "/register"><button className='btn'>Register</button></Link>
        <Link to= "/login"><button className='btn'>Login</button></Link>
        <Link to= "/addproduct"><button className='btn'>Add Product</button></Link>
        <Link to= "/viewproduct"><button className='btn'>View Products</button></Link>
    </nav>
  )
  
}

export default Home