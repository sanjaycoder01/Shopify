// import React from "react";
// import { Link } from "react-router-dom";
// import ProductRating from "./ProductRating";

// const ProductDetails = ({ product }) => {
//   return (
//     <div>
//       <Link to={`/singleproduct/${product.id}`}>
//         <div className="card">
//           <img
//             src={product.image}
//             className="card-img-top w-[200px] h-[150px] cursor-pointer p-1 m-3"
//             alt={product.title}
//           />
//           <div className="card-body">
//             <h5 className="card-title font-normal text-black mx-3">
//               {product.title}
//             </h5>
//             <p className="card-text mx-3 text-green-700 ">₹{product.price} </p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProductDetails;

import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "./ProductRating";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Link to={`/singleproduct/${product.id}`}>
        <div className="card">
          <img
            src={product.image}
            className="card-img-top w-[200px] h-[150px] cursor-pointer p-1 m-3 transition-all duration-500 ease-in-out transform hover:scale-105"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title font-normal text-black mx-3">
              {product.title}
            </h5>
            <p className="card-text mx-3 text-green-700 ">₹{product.price} </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductDetails;
