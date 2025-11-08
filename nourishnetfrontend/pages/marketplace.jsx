import { useEffect } from "react";
import BackCircles from "../components/backcircles";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";

export default function Marketplace() {
  useEffect(() =>{
    fetch("http://localhost:8080/api/food_post", { method: "GET" }).then(async(res)=>{
      const data = await res.json();
      console.log(data);
    });
  },[]); 
  
  return (
    <>
      <BackCircles />
      <Navbar />
      <SearchBar />
      


    </>
  );
}
