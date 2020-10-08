import SearchSVG from './search.svg';

const SearchInput: React.FC<{ onChange }> = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        onChange={handleChange}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchSVG className="h-4 w-4 fill-current"></SearchSVG>
      </button>
    </div>
  );
};

export default SearchInput;
