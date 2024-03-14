// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Search from "./Search";

// import SearchResultsList from "./SearchResultsList";

// const Prodnav = () => {
//   const [results, setResults] = useState([]);

//   return (
//     <nav className=" fixed w-full z-20 top-0 start-0 border border-gray-200 dark:border-gray-600 bg-blue-800 ">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to="/">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tr3E-klghWmuQZVj4aF9GRCmEo6O8AIvpw&usqp=CAU"
//             className="h-10 w-10 bg-black cursor-pointer"
//             alt="Flowbite Logo"
//           />
//         </Link>
//         <Link
//           to="/product"
//           className="flex items-center space-x-3 rtl:space-x-reverse text-white text-xl"
//         >
//           Shopping List
//         </Link>
//         {/* Search Input Field and Button */}
//         <div className="grid grid-flow-row ">
//           <Search setResults={setResults} results={results} />

//           {/* <SearchResultsList results={results} /> */}
//         </div>
//         <div
//           className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
//             <Link to="/checkout">
//               <li className="w-[40px] h-[40px]  flex gap-1 bg-blue-800 ">
//                 <img
//                   src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
//                   alt="icon"
//                   className="filter invert w-9 h-10"
//                 />
//                 <h1 className="text-white mt-2">Cart</h1>
//               </li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Prodnav;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchResultsList from "./SearchResultsList";

const Prodnav = () => {
  const [results, setResults] = useState([]);
  const [scrollBgColor, setScrollBgColor] = useState("bg-white");
  const [text, setText] = useState("text-black");
  const [cartcolor, setCartColor] = useState("");
  useEffect(() => {
    function handleScroll() {
      const scroll = window.pageYOffset;
      if (scroll > 0) {
        setScrollBgColor("bg-blue-800");
        setText("text-white");
        setCartColor("filter invert");
      } else {
        setScrollBgColor("bg-white");
        setText("text-black");
        setCartColor("");
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border border-gray-200 dark:border-gray-600 ${scrollBgColor}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tr3E-klghWmuQZVj4aF9GRCmEo6O8AIvpw&usqp=CAU"
            className="h-10 w-10 bg-black cursor-pointer"
            alt="Flowbite Logo"
          />
        </Link>
        <Link
          to="/product"
          className={`flex items-center space-x-3 rtl:space-x-reverse ${text} text-xl`}
        >
          Shopping List
        </Link>
        <div className="grid grid-flow-row ">
          <Search setResults={setResults} results={results} />
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            <Link to="/checkout">
              <li className={`w-[40px] h-[40px]  flex gap-1 ${scrollBgColor} `}>
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                  alt="icon"
                  className={`${cartcolor} w-9 h-10`}
                />
                <h1 className={`${text} mt-2`}>Cart</h1>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Prodnav;
