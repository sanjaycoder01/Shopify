// import React, { useState, useEffect } from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { json, useNavigate, useParams } from "react-router-dom";

// const Search = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.title &&
//             user.title.toLowerCase().includes(value)
//           );
//         });
//         setResults(results);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };
//   // const onHandleSubmit = (searchterm) => {
//   //   console.log(searchterm);
//   // };
//   return (
//     <div className="w-[75%]">
//       <div className="flex items-center h-10 rounded">
//         <input
//           className="flex-grow items-center h-[100%] w-[100%] rounded-l text-black"
//           type="text"
//           value={input}
//           onChange={(e) => handleChange(e.target.value)}
//           placeholder="Search for products"
//         />
//         <button
//           // onClick={() => {
//           //   onHandleSubmit(searchterm);
//           // }}
//           className="w-[45px]"
//         >
//           <MagnifyingGlassIcon className="h-[27px] m-auto stroke-sky-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchResultsList from "./SearchResultsList";

const Search = ({ setResults, results }) => {
  const [input, setInput] = useState("");
  const [searchResultsVisible, setSearchResultsVisible] = useState(false); // State to manage visibility of search results

  const fetchData = (value) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    setSearchResultsVisible(value.trim().length > 0); // Show search results only if input is not empty
    fetchData(value);
  };

  // Hide search results if user clicks outside of the search bar or search results
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".search-container")) {
        setSearchResultsVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative search-container ">
      <div className="flex items-center h-10  ">
        <input
          className="flex-grow items-center h-[50px] w-[400px] px-4 rounded-l text-black focus:outline-none border border-neutral-400 font-medium   "
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search for products"
        />
        {/* <button className="w-10 h-full flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5 stroke-sky-600" />
        </button> */}
      </div>
      {searchResultsVisible && input.trim().length > 0 && (
        <div className="absolute z-10  bg-white  shadow-lg  ">
          <SearchResultsList results={results} />
        </div>
      )}
    </div>
  );
};

export default Search;
