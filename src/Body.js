import { RestaurantCard } from "./Components/RestaurantCard"
import Simmer from "./Components/Simmer.js";
import { BTN_URL } from "./utils/const.js"
import { Link } from "react-router";
import { useState, useEffect } from "react"
import useOnlineStatus from "./utils/useOnlineStatus.js";
import gif from "./assets/tenor.gif"

const Body = () => {

    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2546547&lng=77.4006229&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // Check and extract restaurant data safely
        const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // Only set state if restaurants exists
        if (restaurants) {
            setListRestaurant(restaurants);
            setFilteredRestaurant(restaurants)
        } else {
            console.log("Restaurant data not found in API response.");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Optional: log the updated restaurant list after state change


    // if () {
    //     return  <Simmer />
    // }

    const handleOnlineStatus = useOnlineStatus()

    function handleSearching() {
        const filteredSearch = listRestaurant.filter((item) => item.info.name.toLowerCase().includes(search.toLowerCase()))
        // setListRestaurant(filteredSearch)
        setFilteredRestaurant(filteredSearch)
    }

    if (handleOnlineStatus === false) return <div>
        <img src={gif} alt="" />
    </div>

    return (
        <div className="body">
            <div className="search">
                <input type="text" onChange={(e) => setSearch(e.target.value)} className="search_input_Box" placeholder="Search Food Here... 😋" />
                <button onClick={handleSearching} className="search-btn" >
                    <img src={BTN_URL} width={15} alt="" />
                </button>
            </div>
            <div className="filter-btn-space">
                <button onClick={() => {
                    setFilteredRestaurant(listRestaurant);
                }} className="filter-btn">All Restaurant</button>
                <button onClick={() => {
                    const filteredList = filteredRestaurant.filter((item) => item.info.avgRating > 4.2);
                    setFilteredRestaurant(filteredList);
                }} className="filter-btn">Top rated restaurant</button>
                <button onClick={() => {
                    const filteredList = filteredRestaurant.filter((item) => item.info.name.includes("Ice Creams"));
                    setFilteredRestaurant(filteredList);
                }} className="filter-btn">Ice Cream</button>

            </div>


            {
                listRestaurant.length === 0 ? <div className="res-container">
                    <Simmer />
                </div> :
                    <div className="res-container">
                        {
                            filteredRestaurant.map((restaurant) => {
                                return (
                                    <Link style={{ color: "#2c3e50" }} key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard resData={restaurant} /></Link>
                                )
                            })
                        }
                    </div>
            }


        </div>
    )
}

export default Body;
