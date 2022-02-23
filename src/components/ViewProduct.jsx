import React, { useEffect, useState } from 'react'

function ViewProduct() {

    const [data, setData] = useState([])

    useEffect(() => { getData() }, [])
    
    const getData = async () => {

        const allProducts = fetch('http://localhost:3001/products')
        .then( d => d.json() )
        .then( res => setData(res) )
    }

  return (
    <div>
        <h1>Products</h1>
        <div className='productsDiv'>
            <table className='tbl'>

                <tr>
                    <th>Name</th>   
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                </tr>

                {data.map( (item, i) => (
                    <tr key = {i} className='rows'>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.category}</td>
                    </tr>
                ) )}

            </table>
        </div>
    </div>
  )
}

export default ViewProduct