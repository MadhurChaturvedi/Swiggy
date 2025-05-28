import { RestaurantCard } from "./Components/RestaurantCard"
import Simmer from "./Components/Simmer.js";
import { BTN_URL } from "./utils/const.js"

import { useState, useEffect } from "react"

const Body = () => {

    const [listRestaurant, setListRestaurant] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2546547&lng=77.4006229&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Check and extract restaurant data safely
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // Only set state if restaurants exists
        if (restaurants) {
            setListRestaurant(restaurants);
        } else {
            console.log("Restaurant data not found in API response.");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Optional: log the updated restaurant list after state change


    if (listRestaurant.length === 0) {
        return  <Simmer />
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search_input_Box" placeholder="Search Food Here... 😋" />
                <button className="search-btn">
                    <img src={BTN_URL} width={15} alt="" />
                </button>
            </div>

            <div className="filter-btn-space">
                <button onClick={() => {
                    const filteredList = listRestaurant.filter(
                        (res) => res.info.avgRating > 4)
                    setListRestaurant(filteredList)
                }} className="filter-btn">🍔Top rated restaurant</button>
            </div>

            <div className="res-container">
                {
                    listRestaurant.map((restaurant) => {
                        return (
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        )
                    })
                }
            </div>
           
        </div>
    )
}

export default Body;
