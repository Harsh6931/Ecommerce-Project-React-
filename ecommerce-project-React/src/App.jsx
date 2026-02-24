import { Homepage } from './pages/Homepage'
import { CheckOutpage } from './pages/Checkoutpage'
import { Route, Routes} from 'react-router'
import { Tracking } from './pages/trackingPage'
import { Order } from './pages/OrderPage'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="checkout" element={<CheckOutpage/>}></Route>
      <Route path="orders" element={<Order/>}></Route>
      <Route path="trackings" element={<Tracking/>}></Route>
    </Routes>
    
    
  )
}

export default App
