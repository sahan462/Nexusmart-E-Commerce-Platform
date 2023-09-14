export default function PricePanel(params) {
  return (
    <div>
      <div className="font-semibold text-primary text-3xl">{`Rs. ${
        params.discountData ? params.discountData.newPrice : params.price
      }`}</div>
      {/* discount details here  */}
      <div className="text-gray-500">
        <span className="mr-1 line-through">{`Rs. ${params.price}`}</span>
        <span>{`-${
          params.discountData ? params.discountData.percentage : "0"
        }%`}</span>
      </div>
    </div>
  );
}
