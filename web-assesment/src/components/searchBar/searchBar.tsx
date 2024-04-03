import { useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search:', searchTerm);
    setSearchTerm(''); // Clear search term after submit
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center w-full mt-3 relative">
      <div className='absolute text-3xl ml-2'>

     <CiSearch />
      </div>

      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="w-full px-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="absolute right-0 top-0 mt-2 mr-4 bg-[#7893F1] text-gray-200 px-3 py-2 rounded-xl mt-[-5px]"
      >Search</button>
    </div>
  );
}

export default SearchBar;
