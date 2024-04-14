import React, { useState } from 'react'
import Product from './Product'
import {products} from '../utils/ProductList'

import './ValueCart.css'


function ValueCart() {
  const [searchText, setSearchText] = useState("");

  const [filterItem,setFilterItem] = useState(products);

  const handleKeyPress=(event)=>{
    if(event.key==="Enter"){
      const data = filterData(products, searchText);

            //update the state
            setFilterItem(data);
    }
  }


  function filterData (products, searchText) {
    const FilterData = products.filter((item) => 
    item?.info?.title?.toLowerCase()?.includes(searchText.toLowerCase()));
   
    return FilterData;
  }

  return (
    <div className='valuecart'>

      <div className='search__container'>
        <input
          type="searchBox"
          className="searchBox"
          value={searchText}
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            console.log(e);
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          style={{
            height:'30px',
          }}
          onClick={() => {
            //Filter the list
            const data = filterData(products, searchText);

            //update the state
            setFilterItem(data);
          }}
        >
          Search
        </button>
      </div>

      
      <div  className='products_list'>
        {
        (filterItem.length==0 )?(
          <h1>Item you are searching for is not available</h1>
        ):
        filterItem.map(items=>{
          return (
           <div key={items.info.id}> 

          <Product  {...items.info } />
          </div>
        )
        })}
  
      </div>
        
     

    </div>
  )
}

export default ValueCart;
