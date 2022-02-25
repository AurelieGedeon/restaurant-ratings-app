import { useEffect, useState } from "react";
import { List } from "@mui/material";
import BasicRating from "./Ratings";

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
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li>
                  <h2>{restaurant.name}</h2>
                  <img src={restaurant.photoUrl} />
                  <h2>
                    <BasicRating rating={restaurant.rating} />
                  </h2>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
