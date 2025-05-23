import { RestaurantCard } from "./Components/RestaurantCard"
import { BTN_URL } from "./utils/const.js"
import resList from "./utils/mockData.js"

import { useState } from "react" //this is called named import

const Body = () => {
    const [] = useState();
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
                <button onClick={() => { alert("Fuck you ") }} className="filter-btn">🍔Top rated restaurant</button>
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
                {
                    resList.map((restaurant) => {
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