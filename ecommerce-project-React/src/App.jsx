import { Homepage } from './pages/Homepage'
import { CheckOutpage } from './pages/Checkoutpage'
import { Route, Routes } from 'react-router'
import { Tracking } from './pages/trackingPage'
import { Order } from './pages/OrderPage'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [cart, setCart] = useState([]);  // lift cart up

  const loadCart = async () => {
      const response = await axios.get('http://localhost:3000/api/cart-items?expand=product')
      setCart(response.data);
  }
  useEffect(() => {  // using async /await instead of promise
    loadCart();
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Homepage cart={cart} loadCart={loadCart}/>}></Route>
      <Route path="checkout" element={<CheckOutpage cart={cart}/>}></Route>
      <Route path="orders" element={<Order cart={cart} />}></Route>
      <Route path="trackings" element={<Tracking />}></Route>
    </Routes>


  )
}

export default App
