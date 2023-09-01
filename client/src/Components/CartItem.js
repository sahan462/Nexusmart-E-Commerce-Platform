export default function CartItem(props) {
  return (
    <div className="bg-blue-00">
      <div className="bg-red-300 grid grid-cols-12">
        <div className="col-span-3 bg-purple-100">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Item"
            className="h-40 w-40 object-cover border border-none rounded-lg"
          />
        </div>
        <div className="col-span-9 bg-purple-100 grid grid-cols-6">
          <div className="col-span-3 bg-purple-200">Item Price</div>
          <div className="col-span-3 bg-purple-200">Item Price</div>
        </div>
      </div>
    </div>
  );
}
