export function filterData (products, searchText) {
    const FilterData = products.filter((item) => 
    item?.info?.title?.toLowerCase()?.includes(searchText.toLowerCase()));
   
    return FilterData;
  }