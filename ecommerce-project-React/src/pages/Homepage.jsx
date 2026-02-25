import axios from 'axios';
import { useEffect,useState } from 'react';
import "./Homepage.css";
import { Header } from "../components/Header"
import { Product } from './products.jsx';

export function Homepage({cart, loadCart}) {
  const [Products,setProducts]=useState([]);
  useEffect( () => {
    axios.get('http://localhost:3000/api/products').then((response) => {
    setProducts(response.data);
  });
  },[]); 
  return (
    <>
      <title>Ecommerce Site</title>

      <Header cart={cart}/>

      <div className="home-page">
        <div className="products-grid">
          {Products.map((product) => {
            return (
              <Product product={product} loadCart={loadCart}/>

            )
          })}
        </div>
      </div>
    </>
  );
}
