
import ItemList from "./itemList"
import { CDN_URL } from '../utils/const';

import { useState } from "react";
export default function RestaurantCategory({ data, showItem, setShowIndex }) {
  // console.log(data)

  const handleClick = () => {
    setShowIndex();
    // lifting the state up
  }

  return (
    <div>
      {/* Header Section */}
      <div className="w-6/12 mx-auto m-4  shadow-lg  flex  justify-between flex-col">

        <div className="flex  items-center justify-between px-4 p-4 cursor-pointer" onClick={handleClick} >
          <span className="flex gap-5"><span className="">{data.isVeg == 1 ? <>🟢</> : <>🔴</>}</span>
            <span>{data.name}</span></span>
          <span>🔽</span>
        </div>
        {showItem &&
          <div className=' bg-slate-200 mt-9 m-auto w-full shadow-md p-4 border-2 border-gray-400'>
            <div className="text-xs text-left">
              <strong><span>₹{data.defaultPrice / 100}</span> <span>{data.name}</span></strong>
              <div className="flex justify-center items-center gap-5">
                <span>{data.description}</span><br />
                <span><button className="absolute bg-white p-2 w-14 rounded-lg">Add +</button> <img src={CDN_URL + data.imageId} alt="" /></span>
              </div>

            </div>
          </div>
        }
      </div>
      {/* Accordion body */}
      {/* <ItemList item={data} /> */}

    </div>
  )
}


