import { CDN_URL } from "../utils/const";
export const RestaurantCard = (props) => {
    const { resData } = props

    // if (!resData || !resData.info) {
    //     return <p>Loading restaurant info...</p>;
    // }
    const { name, cuisines, avgRating, costForTwo } = resData?.info;

    return (
        <div className="res-card">
            <img
                className="res-img"
                src={CDN_URL + resData.info.cloudinaryImageId}
                alt="restaurant"
            />
            <h4>{name}</h4>
            <p>{cuisines?.join(', ')}</p>
            <p>Rating - &#9733; {avgRating}</p>
            <p>
                {typeof costForTwo === "number"
                    ? `₹${costForTwo / 100}`
                    : "Price not available"}
            </p>
            <button className="buy">Buy</button>
        </div>
    );
};