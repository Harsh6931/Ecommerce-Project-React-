import { Homepage } from './pages/Homepage'
import { CheckOutpage } from './pages/Checkoutpage'
import { Route, Routes} from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="checkout" element={<CheckOutpage/>}></Route>
    </Routes>
    
    
  )
}

export default App
