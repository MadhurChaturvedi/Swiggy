// import React, { useEffect, useState } from 'react'
import { useState } from 'react';
import { CDN_URL } from '../utils/const.js';
import { Link, useParams } from "react-router";
import useRestaurantMenu from '../utils/useRestaurantMenu.js';
import MenuSimmer from './MenuSimmer.js';
import RestaurantCategory from './RestaurantCategory.js';



export default function Restaurantmenu() {

    // const [resInfo, setResInfo] = useState(null);


    const [showIndex, setShowIndex] = useState(1)

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

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // Get Recommended menu items
    const recommendedSection = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (c) => c.card?.card?.title === "Recommended"
    );
    // const allData =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const itemCards = recommendedSection?.card?.card?.itemCards || [];

    console.log(itemCards)
    /*
      <img
                    src={CDN_URL + cloudinaryImageId
                    }

                    alt={name}
                    className="w-full h-64 object-cover"
                />
 
    */

    //  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card

    return (

        <div className="text-center pt-10">
            <div>


                <div className='flex  w-full items-center justify-center gap-20'>
                    <div className='w-6/12 flex items-center justify-between px-6'>
                        <span>
                            <h3 className='font-bold my-10 text-2xl'>{name}</h3>
                            {/* <p className='font-bold my-10 text-'>{cuisines.join(", ")} - ₹{costForTwo}</p> */}
                        </span>
                        <div>
                            <img
                                src={CDN_URL + cloudinaryImageId
                                }

                                alt={name}
                                className="w-full h-32 object-cover"
                            />
                        </div>
                    </div>


                </div>
                {
                    itemCards.map((item, index) => (<RestaurantCategory
                        showItem={index === showIndex ? true : false}
                        setShowIndex={()=>setShowIndex(index)}
                        data={item.card?.info} key={index} />))
                }

                {/* controlled Component */}
            </div>
            {/* category accordion */}

        </div>

    )

}


// 25:11

// Learn ESlinter

//   <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 p-6 md:p-16 bg-white text-gray-900 mt-20">
//             {/* Product Card */}
//             <div className="bg-white rounded-2xl border max-w-md w-full overflow-hidden shadow-md">
//                 {/* Image */}
//                 <img
//                     src={CDN_URL + cloudinaryImageId
//                     }

//                     alt={name}
//                     className="w-full h-64 object-cover"
//                 />

//                 {/* Content */}
//                 <div className="p-6">
//                     <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
//                     <p className="text-sm mb-4 text-gray-600">{city}</p>
//                     <div className="flex items-center justify-between mt-6">
//                         <span className="text-lg font-semibold text-red-700">
//                             ₹{costForTwo / 100} for two
//                         </span>
//                         <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Product Description */}
//             <div className="max-w-xl">
//                 <h3 className="text-2xl uppercase underline text-red-600 mb-4">
//                     {cuisines.join(", ")}
//                 </h3>

//                 <div className="space-y-6 text-gray-700 text-base leading-relaxed">
//                     <p>
//                         Our Spicy Chicken Burger is made from premium grilled chicken,
//                         marinated in secret spices and topped with our signature hot sauce.
//                     </p>
//                     <p>
//                         Served with fresh lettuce and tomatoes, this burger delivers a bold
//                         flavor punch in every bite.
//                     </p>
//                     <p>
//                         Pair it with our crispy fries and a cold drink to complete your
//                         delicious meal!
//                     </p>
//                     <p className="text-red-600 underline text-xl">Best Seller</p>
//                     <ul>
//                         {
//                             itemCards.map((item, index) => (
//                                 <li key={index}>
//                                     <div >
//                                         <span>{item.card?.info?.name} ---- </span>
//                                         <span>Rs{item.card?.info?.price / 100}</span>
//                                         <span><img src={item} alt="" /></span>

//                                     </div>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>
//         </div>