export default function Checkout() {
  return (
    <div className="mt-4">
      <div className="my-2 font-medium">
        Shipping Details<span className="text-red-400"> *</span>
      </div>
      <div className="grid grid-cols-12 mb-2">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="col-span-12 my-2  py-2 px-2 border border-gray-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Your Address"
          className="col-span-12 my-2  py-2 px-2 border border-gray-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Your Mobile Phone Number"
          className="col-span-6 my-2 mr-1  py-2 px-2 border border-gray-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter Your Mobile Phone Number"
          className="col-span-6 my-2 ml-1  py-2 px-2 border border-gray-400 rounded-lg"
        />
      </div>
      <hr />
      <div className="my-2 font-medium">
        Payment Details<span className="text-red-400"> *</span>
      </div>
      <div className="">
        <div className="w-1/2 grid grid-cols-12 mb-2">
          <input
            type="text"
            placeholder="Card Number"
            className="col-span-12 my-2  py-2 px-2 border border-gray-400 rounded-lg"
          />
          <input
            type="text"
            placeholder="Name on card"
            className="col-span-8 my-2  py-2 px-2 border border-gray-400 rounded-lg"
          />
          <input
            type="text"
            placeholder="MM/YY"
            className="col-span-2 my-2 mx-2  py-2 px-2 border border-gray-400 rounded-lg"
          />
          <input
            type="text"
            placeholder="CVV"
            className="col-span-2 my-2  py-2 px-2 border border-gray-400 rounded-lg"
          />
        </div>
        <button className="bg-primary text-white px-4 py-2 border border-none rounded-md hover:bg-primary_hover">
          Pay Now
        </button>
        <div className="grid grid-cols-11 my-2">
          <hr className="col-span-5 my-2" />

          <div className="col-span-1 text-center">OR</div>

          <hr className="col-span-5 my-2" />
        </div>
      </div>
      <div className="my-2 font-medium">Cash On Delivery</div>
      <div className="">
        <div className="w-1/2 grid grid-cols-12 mb-2"></div>
        <button className="bg-primary text-white px-4 py-2 border border-none rounded-md hover:bg-primary_hover">
          Order Now
        </button>
      </div>
    </div>
  );
}
