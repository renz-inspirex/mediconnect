import React, { FormEvent, useState } from 'react';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (option: any) => {
    setSearchTerm(option);
    setShowDropdown(false);
  };

  return (
    <div className="mx-4 my-8">
      <div className="relative">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {showDropdown && (
          <div className="absolute bg-white border rounded mt-1 w-full">
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((option, index) => (
                <div
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
