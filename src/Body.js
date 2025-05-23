import { RestaurantCard } from "./Components/RestaurantCard"
import resList from "./utils/mockData.js"

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search_input_Box" placeholder="Search Food Here... 😋" />
                <button className="search-btn">
                    <img src="https://icons.veryicon.com/png/o/education-technology/education-app/search-137.png" width={15} alt="" />
                </button>
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