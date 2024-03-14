import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className=" results-list w-[400px] bg-white flex flex-col shadow-md  mt-4 max-h-[250px] overflow-y-auto border-neutral-400">
      {results.map((result, id) => (
        <SearchResult title={result.title} id={result.id} key={id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
