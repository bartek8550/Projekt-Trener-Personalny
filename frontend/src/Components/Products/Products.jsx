import React, { useState, useEffect, useContext } from 'react';
import '../../index.css';
import ProductItem from '../ProductItem/ProductItem';
import { CartContext } from '../../store/CartContext';

const Products = () => {
  const { product_list } = useContext(CartContext);

  const diets = product_list.filter(
    (product) => product.title === 'Plan dietetyczny'
  );
  const trainings = product_list.filter(
    (product) => product.title === 'Plan treningowy'
  );

  return (
    <div className="max-w-7xl mx-auto pt-[5vh] pb-[5vh]">
      <div className="mx-4">
        <h1 className="text-[20px] mb-1">Plany Dietetyczne</h1>
        <div className="flex flex-wrap justify-between">
          {diets.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="mx-4">
        <h1 className="pt-[2vh] text-[20px] mb-1">Plany Treningowe</h1>
        <ul className="flex flex-wrap justify-between">
          {trainings.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
