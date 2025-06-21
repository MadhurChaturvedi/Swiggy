import { CDN_URL } from "../utils/const";
export const RestaurantCard = (props) => {
    const { resData } = props

    // if (!resData || !resData.info) {
    //     return <p>Loading restaurant info...</p>;
    // }
    const { name, cuisines, avgRating, costForTwo } = resData?.info;

    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white shadow-xl rounded-2xl overflow-hidden transition-transform  duration-300">

            {/* Image */}
            <img
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt={name}
                className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-gray-900 truncate">{name}</h3>
                <p className="text-sm text-gray-600">{cuisines?.join(', ')}</p>
                <p className="text-sm text-yellow-600 font-medium">⭐ Rating: {avgRating}</p>
                <p className="text-sm font-semibold text-purple-700">{costForTwo}</p>

                {/* Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md shadow">
                        Buy Now
                    </button>
                    <button className="w-full  text-gray-900 py-2 px-4 rounded-md shadow">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};



// heigh order Component

// input - Restaurant Card => restaurant card promoted


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>true</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}