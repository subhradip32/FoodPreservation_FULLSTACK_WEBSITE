import { useEffect, useState } from "react";
import BackCircles from "../components/backcircles";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Productcard from "../components/productcard";

export default function Marketplace() {
  const [productData, setProductData] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/api/food_post", { method: "GET" }).then(async(res)=>{
      const data = await res.json();
      setProductData(data);
      console.log(data)
    });
  },[]);
  
  return (
    <>
      <BackCircles />
      <Navbar />
      <SearchBar />
      
      <div className="grid align-middle grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full mx-auto p-6">
        {productData.map((product, index) => (
          <Productcard
            key={index}
            name={product.name}
            des={product.description}
            imgurl={product.imageUrl}
            quantity={product.quantity}
            cost = {product.cost}
          />
        ))}
      </div>



    </>
  );
}
