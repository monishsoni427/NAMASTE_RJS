import React, { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className="res-card m-7 p-4 w-60 h-[420] justify-center bg-gray-100 hover:bg-gray-200"  >
      <img
        className="object-contain h-48 w-96"
        src={CDN_URL + cloudinaryImageId}
        alt="card-image"
        
      />
      <div className="m-2 ">
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

//Higher Order Component

//Input - Restaurant Card => RestaurantCardPromoted 

export const withPromotedLabel  = (RestaurantCard) =>{
  return (props)=>{  
    return(<div>
    <label className="absolute bg-black text-white m-2  p-2 rounded-lg" >Open</label>
    <RestaurantCard {...props}/>
    </div>
  )
  }
}


export default RestaurantCard;
