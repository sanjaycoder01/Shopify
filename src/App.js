import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import appStore from "./components/utils/appstore";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Checkout";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Provider store={appStore}>
      <div className="m-4 font-bold">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/product" element={<Product />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
{
  /* <div className="relative max-w-sm mx-auto mt-0">
              <input
                className="w-[350px] py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                type="search"
                placeholder="Search for products"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                  />
                </svg>
              </button>
            </div> */
}
