import { RestaurantCard } from "./Components/RestaurantCard"
import { BTN_URL } from "./utils/const.js"
// import resList from "./utils/mockData.js"

import { useState, useEffect } from "react" //this is called named import

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    //   useEffect Hook

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2546547&lng=77.4006229&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if (!restaurants) return (<p>Loading...</p>)
        setListRestaurant(restaurants)
        console.log(listRestaurant);


    }

    // cors polecy

    // two parameter call back function and second one is dependency array
    useEffect(() => {
        // console.log("useEffect Called");
        fetchData()
    }, []);


    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search_input_Box" placeholder="Search Food Here... 😋" />
                <button className="search-btn">
                    <img src={BTN_URL} width={15} alt="" />
                </button>
            </div>
            {/* filter btn */}
            <div className="filter-btn-space">
                <button onClick={() => {
                    const filteredList = listRestaurant.filter(
                        (res) => res.info.avgRating > 4)
                    setListRestaurant(filteredList)
                }} className="filter-btn">🍔Top rated restaurant</button>
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
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


export default Body