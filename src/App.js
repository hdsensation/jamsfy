import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Bar from './Components/Bar'
import Products from './Components/Products'


function App() {
  const [product, setproduct] = useState([])
  const [det, setdet] = useState(product)
  const [title, settitle] = useState('ALL')
  
  useEffect(() => {
   const get= async()=>{
    let res= await fetch('https://fakestoreapi.com/products')
    setproduct(await res.clone().json())
    setdet(await res.json())
    }
    get()
  }, [])

  function change(cat) {
    let fdata= product.filter((x)=> x.category === cat)
    setdet(fdata)
    settitle(cat)
  }

  return (
    <div>
      <Navbar/>
      <Bar change={change} product={product} set={setdet} title={title} sett={settitle}/>
      <Products  det={det} />
    </div>
  )
}

export default App
