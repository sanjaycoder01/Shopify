import React from "react";

const CartProduct = ({ cartproducts }) => {
  return (
    <div>
      {/* Left */}
      <div className="col-span-10 p-8 rounded bg-white m-auto">
        <img
          className="w-[100px] h-[100px]"
          src={cartproducts.image}
          alt={cartproducts.title}
        />
      </div>
      {/* Middle */}
      <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400 mt-[40px]">
        <div className="mb-3"></div>
        <div className="text-base xl:text-lg mt-3">
          <p>₹{cartproducts.price}</p>
          <button className="border border-black rounded-md bg-green-400 px-1">
            {/* {cartproducts.rating.rate}★ */}
          </button>
          <p>{cartproducts.category}</p>
          <p>{cartproducts.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
