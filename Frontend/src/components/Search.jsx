import React from 'react'

const Search = ({ searchText , setSearchText}) => {
  return (
    <div className="search">
        <div>
            <img src="./search.svg" alt="search" />

            <input 
                type="text"
                placeholder='Search through thousands of movies'
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search