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
            <p>Rating - {avgRating} </p>
            <p>
                {/* {typeof costForTwo === "number"
                    ? `₹${ / 100}`
                    : "Price not available"} */}
                {costForTwo}
            </p>
            <div style={{ paddingTop: "5px", display: "flex", flexDirection: 'column', gap: "15px" }}>
                <button className="buy">Buy</button>
                <button className="buy">Add to Cart</button>
            </div>
        </div>
    );
};