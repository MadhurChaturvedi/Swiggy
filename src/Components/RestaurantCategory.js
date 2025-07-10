
import ItemList from "./itemList"
export default function RestaurantCategory({ data }) {
  console.log(data)
  return (
    <div>
      {/* Header Section */}
      <div className="w-6/12 mx-auto m-4 bg-slate-200 shadow-lg p-4 flex  justify-between px-3">
        <span>{data.name}</span>
        <span>🔽</span>
      </div>
      {/* Accordion body */}
      <ItemList item={data} />
    </div>
  )
}
