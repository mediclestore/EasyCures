import { useState } from 'react';

import './SearchBtn.css'
const SearchBtn=()=>{
    const [searchText, setSearchText] = useState("");


    return(
        <div className='search__container'>
        <input
          type="searchBox"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            //Filter the list
            //const data = filterData(products, searchText);

            //update the state
            //setFilterMedicine(data);
          }}
        >
          Search
        </button>
      </div>
    )
}

export default SearchBtn;

