import React, { useEffect, useState } from 'react'
// import Simmer from './Simmer';
import { CDN_URL } from '../utils/const';
import { Link, useParams } from "react-router"

export default function Restaurantmenu() {


    const SimmerSingplePage = () => {
        return (
            <div style={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className='simmer-card'></div>
            </div >
        )
    }


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

    if (resInfo === null) return <SimmerSingplePage />

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
            <div className='btn-left'>
                <Link to={"/"}><button>Back to All product's </button></Link>
            </div>
            <div className='res-img'>
                <img src={CDN_URL + cloudinaryImageId} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>{cuisines}</h3>
                <h4>₹ {costForTwo}</h4>
                <h4 style={{ display: "flex", alignItems: "center" }}><img width={30} src="https://cdn-icons-png.flaticon.com/512/5632/5632658.png" alt="" /> {areaName}</h4>
            </div>
        </div>
    )

}
