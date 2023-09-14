export default function QuantityPanel(params) {
  return (
    <div className="flex items-center">
      <span className="text-gray-500">Quantity: </span>
      <button
        className="bg-gray-200 h-7 w-7 mx-2 border border-none rounded-full font-medium flex item-center justify-center hover:bg-gray-300"
        onClick={() => {
          params.selectedQuantity === 1
            ? params.setSelectedQuantity(1)
            : params.setSelectedQuantity(params.selectedQuantity - 1);
        }}
      >
        -
      </button>
      <span className="text-black">{params.selectedQuantity}</span>
      <button
        className="bg-gray-300 h-7 w-7 mx-2 border border-none rounded-full font-medium flex item-center justify-center hover:bg-gray-400"
        onClick={() => {
          params.setSelectedQuantity(params.selectedQuantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
