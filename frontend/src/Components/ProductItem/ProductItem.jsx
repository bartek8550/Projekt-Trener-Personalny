import React, { useContext } from "react";
import "../../index.css";
import { CartContext } from "../../store/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col">
      <img
        src={`http://localhost:3000/images/${product.image}`}
        alt={product.title}
        className="w-[150px] h-[150px] rounded-md md:w-[175px] md:h-[175px] lg:w-[275px] lg:h-[275px]"
      />
      <div className="text-center">
        <h1 className="">{product.title}</h1>
        <p className="">{product.detail}</p>
        <p className="text-pColor mb-2">{`${product.price} zł`}</p>
      </div>
      <p className="flex justify-center">
        <button
          type="button"
          className=" flex items-center justify-center
    motion-safe:hover:-translate-y-0.5 
    motion-safe:transition 
    bg-pColor text-white font-medium shadow-btn rounded-md mb-5
    text-[0.72rem] h-[2.3rem] w-[7rem]           
    sm:text-[0.85rem] sm:h-[2.3rem] sm:w-[8.5rem]
    lg:text-[0.90rem] lg:h-[2.5rem] lg:w-[10rem]
    "
          onClick={() => addToCart(product._id)}
        >
          Dodaj do koszyka
        </button>
      </p>
    </div>
  );
};

export default ProductItem;
