// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
// import useRef from "react";
// import { videoVisible } from "../utils/videoSlice";
// import { useDispatch } from "react-redux";

// const NavBar = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const dispatch = useDispatch();

//   const handleGetStarted = () => {
//     setIsPlaying(!isPlaying);
//     dispatch(videoVisible(!isPlaying)); // Pass the opposite of isPlaying
//   };

//   const handleReloadHome = () => {
//     window.location.reload(); // Reload the page
//   };

//   return (
//     <nav
//       className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
//       id="navbar"
//     >
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link to="/" onClick={handleReloadHome}>
//           <a className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img
//               src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
//               Shopify
//             </span>
//           </a>
//         </Link>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           {/* Other navbar elements, if any */}
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <ul className="text-black flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
//               <li>
//                 <a href="" className="text-xl">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <Link to="/product" className="text-black text-xl">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/checkout" className="text-xl">
//                   Cart
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-xl"></Link>
//               </li>
//             </ul>
//             <div className="flex items-center">
//               <button
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 onClick={handleGetStarted}
//               >
//                 Get Started
//               </button>
//               <button className="flex">
// <img
//   className="h-10 w-10 ml-4"
//   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlltLnOENZZELulCg1kKVkxYSJ430rb2OLp5iODbCoLdDuN47RKmuVsYy1hr97Kqw1hSk&usqp=CAU"
// />

//                 {/* <p className="mt-[6px] font-normal cursor-pointer"> LogIn</p> */}
//                 <select className="mt-[6px] font-normal cursor-pointer">
//                   <option>
//                     <p>Login</p>
//                   </option>
//                   <option className="mt-2">
//                     <button>New User? Sign In</button>
//                   </option>
//                 </select>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { videoVisible } from "../utils/videoSlice";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGetStarted = () => {
    setIsPlaying(!isPlaying);
    dispatch(videoVisible(!isPlaying));
  };

  const handleReloadHome = () => {
    window.location.reload();
  };

  const handleLogin = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "login") {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 " id="navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" onClick={handleReloadHome}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Shopify
            </span>
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Other navbar elements, if any */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="text-black flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link to="/" className="text-xl" onClick={handleReloadHome}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-black text-xl">
                  Products
                </Link>
              </li>
              <li className="flex flex-row">
                <Link to="/checkout" className="text-xl ">
                  Cart
                </Link>
                <Link to="/checkout" className="text-xl ">
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    alt="icon"
                    className=" w-7 h-8 ml-2"
                  />
                </Link>
              </li>
            </ul>
            <div className="flex items-center ml-8">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
              <div className="ml-4 flex flex-row">
                <img
                  className="h-10 w-10 ml-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlltLnOENZZELulCg1kKVkxYSJ430rb2OLp5iODbCoLdDuN47RKmuVsYy1hr97Kqw1hSk&usqp=CAU"
                />
                <select
                  className="font-normal cursor-pointer hover:bg-blue-600  border rounded-md w-[115px]"
                  onChange={handleLogin}
                >
                  <option value="" className="bg-white ">
                    Login
                  </option>
                  <option value="login" className="mt-2 bg-white">
                    New User? Sign Up
                  </option>
                  {/* Add more options if needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
