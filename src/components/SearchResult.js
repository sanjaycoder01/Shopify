import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SearchResult = ({ title, id }) => {
  const goto = () => {
    window.location.href = `/singleproduct/${id}`;
  };

  return (
    <>
      <div
        className="search-result cursor-pointer  py-2 flex flex-row px-2"
        onClick={goto}
      >
        <p>{title}</p>
      </div>
    </>
  );
};

export default SearchResult;
