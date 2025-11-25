import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

  const [ListOfRes,setListOfRes]=useState(resobj.data);
  return (
    <div className="body">
      <div className="search">search</div>
      <div>
      <button className="filter-btn"
      onClick={()=>{

        const filteredList=ListOfRes.filter(
          (res) =>res.info.avgRating>4
        );
        setListOfRes(filteredList);

      }}>Top Rated Restaurant</button></div>
      <div className="Res-container">
        {
          ListOfRes.map((restaurant) =>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
       
        
      </div>
    </div>
  );
};



export default Body;