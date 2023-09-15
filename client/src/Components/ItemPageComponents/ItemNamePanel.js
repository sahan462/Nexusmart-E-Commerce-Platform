export default function ItemNamePanel(params) {
  return (
    <>
      <div className="text-sm text-gray-500 row-span-1">
        {params.categories[0]} {">"} {params.categories[1]}
      </div>
      <div className="text-lg font-semibold row-span-2 flex items-center">
        {params.itemName}
      </div>
      <div className="flex items-center row-span-1">
        <span className="flex items-center ">{params.starComponents}</span>
        <span className="flex items-center ml-2 text-sm text-gray-500">
          {params.reviewCount} Review(s)
        </span>
      </div>
      <div className="text-sm flex items-center row-span-1 text-gray-500">
        Brand:
        <span className=" ml-2 flex items-center">{params.brand}</span>
      </div>
    </>
  );
}
