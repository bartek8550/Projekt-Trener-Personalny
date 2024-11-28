import React, { useState, useEffect } from 'react';
import '../../index.css';
import ProductItem from '../ProductItem/ProductItem';

const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:3000/api/v1/products');

      if (!res.ok) {
        //..
      }

      const products = await res.json();
      setLoadedProducts(products.data.products);
    }

    fetchProducts();
  }, []);

  const diets = loadedProducts.filter(
    (product) => product.title === 'Plan dietetyczny'
  );
  const trainings = loadedProducts.filter(
    (product) => product.title === 'Plan treningowy'
  );

  return (
    <div className="max-w-7xl mx-auto pt-[5vh] pb-[5vh]">
      <div className="mx-4">
        <h1 className="text-[20px] mb-1">Plany Dietetyczne</h1>
        <div className="flex flex-wrap justify-between">
          {diets.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mx-4">
        <h1 className="pt-[2vh] text-[20px] mb-1">Plany Treningowe</h1>
        <ul className="flex flex-wrap justify-between">
          {trainings.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
