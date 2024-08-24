import { useState, useEffect } from "react";
import { RESTAURANT_DATA } from "./constant";

const useRestaurantData = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DATA);
    const json = await data.json();
    console.log(json);
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(resData);
  };

  return resData;
};

export default useRestaurantData;
