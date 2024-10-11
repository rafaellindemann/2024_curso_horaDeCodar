import { useState,useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)

      console.log(data);
      
    }
    getData()
  }, [])

  return (
    <div>
      <h1>HTTP em React</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - R${product.price.toFixed(2)}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
