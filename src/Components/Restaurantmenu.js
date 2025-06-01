import React, { useEffect, useState } from 'react'
import Simmer from './Simmer';
import { CDN_URL } from '../utils/const';
import { useParams } from "react-router"

export default function Restaurantmenu() {

    const [resInfo, setResInfo] = useState(null);
    const { ID } = useParams();

    // console.log(resID);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2546547&lng=77.4006229&restaurantId=${ID}`)
        const resjson = await data.json();
        console.log(resjson);
        setResInfo(resjson.data)
    };

    if (resInfo === null) return <Simmer />

    // const { , cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    // const name = resInfo?.cards[2]?.card?.card?.info.name;
    // const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
    // const costForTwo = resInfo?.cards[2]?.card?.card?.info.costForTwo;
    // const cloudinaryImageId = resInfo?.cards[2]?.card?.card?.info.cloudinaryImageId;
    // const areaName = resInfo?.cards[2]?.card?.card?.info.areaName;
    const { name, cuisines, costForTwo, cloudinaryImageId, areaName } = resInfo?.cards[2]?.card?.card?.info

    // const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(itemCards)

    return (

        <div className='menu'>
            <img src={CDN_URL + cloudinaryImageId} alt="" />
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
        </div>
    )

}
