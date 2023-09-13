export default function ItemColorButton(params) {
  return (
    <button
      className={`h-7 w-7 mr-2 border-2 rounded-full hover:shadow-md`}
      style={
        params.isFill
          ? {
              backgroundColor: params.colorCode,
              borderColor: params.colorCode,
            }
          : {
              backgroundColor: "white",
              borderColor: params.colorCode,
            }
      }
      onClick={() => {
        params.colorHandler(params.colorID, params.colorName);
      }}
    ></button>
  );
}
