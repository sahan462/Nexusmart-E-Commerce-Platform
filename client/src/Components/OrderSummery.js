export default function OrderSummery() {
  return (
    <div className="bg-white w-full border border-none rounded-lg shadow-lg">
      <div className="text-center text-lg font-bold text-primary overflow-hidden py-4">
        Order Summery
      </div>
      <div className="px-6">
        <div className=" grid grid-cols-6 mb-4">
          <div className="col-span-3">Subtotal</div>
          <div className="col-span-3 pl-2">Rs. 3442</div>
        </div>
        <div className="grid grid-cols-6  mb-4">
          <div className="col-span-3">Shipping Fee</div>
          <div className="col-span-3 pl-2">Rs. 438</div>
        </div>
        <div className="grid grid-cols-6  mb-4">
          <div className="col-span-3">Shipping Fee Discount</div>
          <div className="col-span-3">-Rs. 219</div>
        </div>
        <div className="grid grid-cols-6  mb-4 font-medium text-lg">
          <div className="col-span-3">Total</div>
          <div className="col-span-3 pl-2">Rs. 3651</div>
        </div>
        <div className="flex justify-center py-4">
          <button className="px-4 h-12 bg-primary text-white border border-none rounded-lg hover:bg-primary_hover">
            PROCEED TO CHECKOUT (2)
          </button>
        </div>
      </div>
    </div>
  );
}
