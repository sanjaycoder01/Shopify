// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Prodnav from "./Prodnav";
// import { useDispatch } from "react-redux";
// import { addProduct } from "./utils/productslice";

// const SingleProduct = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();
//   const [quantity, setQuantity] = useState("1");

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const productData = await response.json();
//       setProduct(productData);
//     };

//     fetchProduct();
//   }, [id]);
//   const dispatch = useDispatch();
//   const [add, setAdd] = useState(null);
//   const cartproduct = () => {
//     setAdd((add.quantity = quantity));
//     return add;
//   };

//   return (
//     <div>
//       {product ? (
//         <>
//           <Prodnav />
//           <div className="h-screen bg-white mt-[30px]">
//             <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
//               <div className="grid grid-cols-10 gap-2">
//                 {/* Left */}
//                 <div className="col-span-3 p-8 rounded bg-white m-auto">
//                   <img src={product.image} alt={product.title} />
//                 </div>
//                 {/* Middle */}
//                 <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400 mt-[40px]">
//                   <div className="mb-3"></div>
//                   <div className="text-base xl:text-lg mt-3">
//                     <p>₹{product.price}</p>
//                     <button className="border border-black rounded-md bg-green-400 px-1">
//                       {product.rating.rate}★
//                     </button>
//                     <p>{product.category}</p>
//                     <p>{product.description}</p>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="col-span-2 p-4 rounded bg-white h-[562px] mt-[40px]">
//                   <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
//                     {/* {GB_CURRENCY.format(product.price)} */}
//                   </div>
//                   <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
//                     <span className="line-through">
//                       {/* {GB_CURRENCY.format(product.oldPrice)} */}
//                     </span>
//                   </div>
//                   <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
//                     FREE Returns
//                   </div>
//                   <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
//                     FREE Delivery
//                   </div>
//                   <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
//                     In Stock
//                   </div>
//                   <div className="text-base xl:text-lg mt-1">
//                     Quantity:
//                     <select
//                       onChange={(e) => setQuantity(e.target.value)}
//                       className="p-2 bg-white border rounded-md focus:border-indigo-600"
//                     >
//                       <option>1</option>
//                       <option>2</option>
//                       <option>3</option>
//                     </select>
//                   </div>
//                   <Link to="/cart">
//                     <button
//                       className="bg-yellow-500 rounded-sm w-[100%] p-3 text-xl hover:bg-yellow-700 mt-2"
//                       onClick={() => dispatch(addProduct(cartproduct()))}
//                     >
//                       Add to Cart
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Prodnav from "./Prodnav";
import { useDispatch } from "react-redux";
import { addToCart } from "./utils/cartSlice";
import ProductRating from "./ProductRating";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();

  const cartproduct = () => {
    return {
      ...product,
      quantity: parseInt(quantity),
    };
  };

  return (
    <div>
      {product ? (
        <>
          <Prodnav />
          <div className="h-screen bg-gray-200 mt-[30px]">
            <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
              <div className="grid grid-cols-10 gap-4 bg-gray-200">
                {/* Left */}
                <div className="col-span-3 p-8 rounded bg-white  mt-10 h-[561px]">
                  <img
                    className="h-[400px] transition-all duration-500 ease-in-out transform hover:scale-105"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                {/* Middle */}
                <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400 mt-[40px]">
                  <div className="mb-3"></div>
                  <div className="text-base xl:text-lg mt-3">
                    <p className="font-bold text-2xl">{product.title}</p>
                    <p>₹{product.price}</p>
                    <button className="">
                      <ProductRating rating={product.rating} />
                    </button>
                    <p className="font-bold text-2xl">{product.category}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-2 p-4 rounded bg-white h-[562px] mt-[40px]">
                  <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                    {/* {GB_CURRENCY.format(product.price)} */}
                  </div>
                  <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                    <span className="line-through">
                      {/* {GB_CURRENCY.format(product.oldPrice)} */}
                    </span>
                  </div>
                  <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                    FREE Returns
                  </div>
                  <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                    FREE Delivery
                  </div>
                  <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                    In Stock
                  </div>
                  <div className="text-base xl:text-lg mt-1">
                    Quantity:
                    <select
                      onChange={(e) => setQuantity(e.target.value)}
                      className="p-2 bg-white border rounded-md focus:border-indigo-600"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <Link to="/checkout">
                    <button
                      className="bg-yellow-500 rounded-sm w-[100%] p-3 text-xl hover:bg-yellow-700 mt-2"
                      onClick={() => dispatch(addToCart(cartproduct()))}
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
