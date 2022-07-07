import React, { useState } from "react";

function SearchForm( { search } ) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="searchTerm"
                placeholder="Enter a search term..." 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;