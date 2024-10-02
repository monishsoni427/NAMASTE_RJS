import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;

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

export default RestaurantCard;
