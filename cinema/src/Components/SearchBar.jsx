import React, { useState } from 'react'
import './data/searchBar.css'

function SearchBar({ placeholder, data }) {
  const [filterData, setfilterData] = useState([])
  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setfilterData([]);
    } else
      setfilterData(newFilter);

  }


  return (
    <div className='search'>
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />



        <div className='searchIcon'></div>
      </div>
      {filterData.length !== 0 && (
        <div className='dataResult'>
          {filterData.slice(0, 3).map((value, key) => {
            return <a className='dataItem'>

              <p>{value.name}</p>
            </a>;
          })}

        </div>
      )}
    </div>
  );
}

export default SearchBar;   