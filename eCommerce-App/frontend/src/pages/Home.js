import React, { useState, useEffect } from "react";
import axios from 'axios';
import Product from '../components/ProductCard.js';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <div>
      <h2>
        <span className='badge' style={{ backgroundColor: "#2469A0" }}>
          Discount
        </span>
      </h2>
      <div className='productBox'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {products.map((product) => {
            return (
              <Product key={product._id} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
