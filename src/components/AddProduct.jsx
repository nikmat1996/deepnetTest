import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [category, setCategory] = useState("")

    const handleAddProduct = async () => {
        const products = await axios.get('http://localhost:3001/products')
        console.log(products.data)

        products.data.forEach(element => {

            if(element.name === name) alert("Product Already Exist")
            
        });


        // await axios.post('http://localhost:3001/products',{ name, price, quantity, category} )

        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify({ name, price, quantity, category}),
            headers: {
              'content-type': 'application/json',
            },
          })

    }

  return (
    <>
            <h1>AddProduct</h1>

            <form className='frm'>
                <input className='inp'
                type="text"
                placeholder="Enter Name"
                onChange= { (e) => setName(e.target.value) }
                  value={name}
                />
                <input className='inp'
                type="number"
                placeholder="Enter Price"
                onChange= { (e) => setPrice(e.target.value) }
                value={price}
                />
                <input className='inp'
                type="number"
                placeholder="Enter Quantity"
                onChange= { (e) => setQuantity(e.target.value) }
                value={quantity}
                />
                <input className='inp'
                type="number"
                placeholder="Enter Category"
                onChange= { (e) => setCategory(e.target.value) }
                value={category}
                />
            </form>
            <button onClick={handleAddProduct}>Submit</button>
        </>


  )
}

export default AddProduct