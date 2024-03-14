import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Productlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setData(json);
  };
  if (data === null) {
    return "Loading..";
  } else {
    return (
      <div className="mx-5">
        <div className="container mt-20 pb-5 ">
          <div className="row">
            <div className="col-lg-12 mt-[100px]">
              <div className="grid grid-cols-4 gap-12">
                {data.map((product, index) => (
                  <div className="col-lg-3 mb-3 bg-white" key={index}>
                    <ProductDetails product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Productlist;
