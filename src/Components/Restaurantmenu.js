// import React, { useEffect, useState } from 'react'

import { CDN_URL } from '../utils/const';
import { Link, useParams } from "react-router";
import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import MenuSimmer from './MenuSimmer.js';


export default function Restaurantmenu() {


    const SimmerSingplePage = () => {
        return (
            <div style={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='simmer-card'></div>
            </div >
        )
    }


    // const [resInfo, setResInfo] = useState(null);
    const { ID } = useParams();

    // console.log(resID);

    const resInfo = useRestaurantMenu(ID)

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2546547&lng=77.4006229&restaurantId=${ID}`)
    //     const resjson = await data.json();
    //     console.log(resjson);
    //     setResInfo(resjson.data)
    // };

    if (resInfo === null) return <MenuSimmer />

    // const { , cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    // const name = resInfo?.cards[2]?.card?.card?.info.name;
    // const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
    // const costForTwo = resInfo?.cards[2]?.card?.card?.info.costForTwo;
    // const cloudinaryImageId = resInfo?.cards[2]?.card?.card?.info.cloudinaryImageId;
    // const areaName = resInfo?.cards[2]?.card?.card?.info.areaName;


    // const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(itemCards)
    const { name, cuisines, costForTwo, cloudinaryImageId, city } = resInfo?.cards[2]?.card?.card?.info

    //  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
    return (

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 p-6 md:p-16 bg-white text-gray-900 mt-20">

            {/* Product Card */}
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full overflow-hidden">

                {/* Image */}
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt="Spicy Chicken Burger"
                    className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Spicy Chicken Burger</h3>
                    <p className="text-sm mb-4 text-gray-600">
                    </p>

                    <div className="flex items-center justify-between mt-6">
                        <span className="text-lg font-semibold text-red-700">$7.99</span>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Info / Description */}
            <div className="max-w-xl">
                <h4 className="text-sm font-semibold text-red-600 mb-2">Best Seller</h4>
                {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Taste the Heat 🔥
                </h2> */}
                <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                    {/* <p>
                        Our Spicy Chicken Burger is made from premium grilled chicken, marinated in secret spices and topped with our signature hot sauce.
                    </p>
                    <p>
                        Served with fresh lettuce and tomatoes, this burger delivers a bold flavor punch in every bite.
                    </p>
                    <p>
                        Pair it with our crispy fries and a cold drink to complete your delicious meal!
                    </p> */}
                </div>
            </div>
        </div>

    )

}


// 25:11

// Learn ESlinter

