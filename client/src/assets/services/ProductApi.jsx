import axios from "axios";

 const getFilteredProductsAPI = async () => {
  const res = await axios.get(
    "http://164.52.215.173:4002/api/product/filterProducts?limitedEdition=true"
  );
  return res.data.payload.products;  
};

export default getFilteredProductsAPI
 