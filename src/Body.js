import { RestaurantCard } from "./Components/RestaurantCard";
import Simmer from "./Components/Simmer.js";
import { BTN_URL } from "./utils/const.js";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import gif from "./assets/tenor.gif";

const Body = () => {
    const [listRestaurant, setListRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2546547&lng=77.4006229&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // Check and extract restaurant data safely
        const restaurants =
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

        // Only set state if restaurants exists
        if (restaurants) {
            setListRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
        } else {
            console.log("Restaurant data not found in API response.");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Optional: log the updated restaurant list after state change

    // if () {
    //     return  <Simmer />
    // }

    const handleOnlineStatus = useOnlineStatus();

    function handleSearching() {
        const filteredSearch = listRestaurant.filter((item) =>
            item.info.name.toLowerCase().includes(search.toLowerCase())
        );
        // setListRestaurant(filteredSearch)
        setFilteredRestaurant(filteredSearch);
    }

    if (handleOnlineStatus === false)
        return (
            <div>
                <img src={gif} alt="" />
            </div>
        );

    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div className="w-full pt-4 flex items-center justify-center flex-col mt-20">
            <div className="w-full border flex justify-center items-center p-3">
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none p-2 w-2/4 bg-slate-100 rounded-sm outline-none"
                    placeholder="Search Food Here..."
                />
                <button onClick={handleSearching} className="border flex justify-center items-center p-3 bg-purple-500">
                    <img src={BTN_URL} width={15} alt="" />
                </button>
            </div>
            <div className="flex mb-4 p-1 w-full  items-center justify-center gap-10">
                <button
                    onClick={() => {
                        setFilteredRestaurant(listRestaurant);
                    }}
                    className="p-2 border hover:bg-slate-100"
                >
                    All Restaurant
                </button>
                <button
                    onClick={() => {
                        const filteredList = filteredRestaurant.filter(
                            (item) => item.info.avgRating > 4.2
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                    className="p-2 border hover:bg-slate-100"
                >
                    Top rated restaurant
                </button>
                <button
                    onClick={() => {
                        const filteredList = filteredRestaurant.filter((item) =>
                            item.info.name.includes("Ice Creams")
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                    className="p-2 border hover:bg-slate-100"
                >
                    Ice Cream
                </button>
            </div>

            {listRestaurant.length === 0 ? (
                <div className=" py-8 w-full">
                    <div className="container max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {
                                num.map((_, index) => (<Simmer key={index} />))
                            }
                        </div>
                    </div>
                </div>
            ) : (

                <div className=" py-8">
                    <div className="container max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {filteredRestaurant.map((restaurant) => (
                                <Link
                                    key={restaurant.info.id}
                                    to={`/restaurant/${restaurant.info.id}`}
                                    className="text-gray-800 no-underline"
                                >
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Body;


// Scss / sass