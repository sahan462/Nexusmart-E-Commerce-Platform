import ItemColorButton from "../ItemColorButton";
export default function (params) {
  console.log(params.colorData);
  return (
    <div>
      <div className="flex items-center">
        <span className="mr-1 text-gray-500">Color Family:</span>
        <span
          className={`${
            params.selectedColorID ? "text-black" : "text-gray-500"
          }`}
        >
          {params.selectedColorID
            ? params.selectedColorName
            : params.colorData.length > 0
            ? "Please select a color"
            : "Color options not available for this product"}
        </span>
      </div>
      <div className="my-2 flex items-center">
        {params.colorData.length > 0 &&
          params.colorData.map((colorItem) =>
            colorItem._id === params.selectedColorID ? (
              <ItemColorButton
                colorCode={colorItem.hexCode}
                colorName={colorItem.name}
                colorID={colorItem._id}
                colorHandler={params.colorHandler}
                isFill={true}
              />
            ) : (
              <ItemColorButton
                colorCode={colorItem.hexCode}
                colorName={colorItem.name}
                colorID={colorItem._id}
                colorHandler={params.colorHandler}
                isFill={false}
              />
            )
          )}
      </div>
    </div>
  );
}
