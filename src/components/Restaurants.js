import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function GetRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <>
      {!restaurants ? (
        <h2>Loading</h2>
      ) : (
        <>
          {restaurants.map((restaurant) => {
            return (
              <>
                <RestaurantCard
                  restaurant={restaurant}
                  setRestaurants={setRestaurants}
                />
              </>
            );
          })}
        </>
      )}
    </>
  );
}
