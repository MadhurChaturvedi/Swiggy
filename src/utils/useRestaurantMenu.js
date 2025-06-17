import { useEffect, useState } from "react";

export default function useRestaurantMenu(resId) {
    const [resmenu, setResmenu] = useState(null);

    const fetchMenu = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2546547&lng=77.4006229&restaurantId=${resId}`);
            const json = await data.json();
            setResmenu(json.data);
            console.log(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };
    useEffect(() => {
        fetchMenu();
    }, []);

    return resmenu;
}
