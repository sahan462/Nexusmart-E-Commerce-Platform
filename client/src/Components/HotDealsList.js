import HotDealCard from "./HotDealCard";
export default function HotDealsList() {
  const hotDealCards = [
    {
      itemName: "Casio AX404",
      itemDesc: "Black Original Watch",
      imgURL:
        "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzaW8lMjB3YXRjaGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      oldPrice: "Rs. 9000",
      newPrice: "Rs. 2999",
    },
    {
      itemName: "Galaxy S21",
      itemDesc: "128GB Storage, 5G Support",
      imgURL:
        "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      oldPrice: "Rs. 12500",
      newPrice: "Rs. 9999",
    },
    {
      itemName: "Apple AirPods Pro",
      itemDesc: "Active Noise Cancellation",
      imgURL:
        "https://images.unsplash.com/photo-1603680373177-e762186bdc3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "Rs. 2499",
      newPrice: "Rs. 1999",
    },
    {
      itemName: "Sony PlayStation 5",
      itemDesc: "Ultra HD Blu-ray Support",
      imgURL:
        "https://images.unsplash.com/photo-1622297845908-866f3677350e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "Rs. 45999",
      newPrice: "Rs. 39999",
    },
    {
      itemName: "Dell XPS 13 Laptop",
      itemDesc: "13-inch 4K Display, Intel i7",
      imgURL:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      oldPrice: "Rs. 89999",
      newPrice: "Rs. 79999",
    },
    {
      itemName: "Samsung 55-inch TV",
      itemDesc: "Crystal UHD LED Smart TV",
      imgURL:
        "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "Rs. 54999",
      newPrice: "Rs. 47999",
    },
    {
      itemName: "Nike Air Max",
      itemDesc: "Classic Style, Various Colors",
      imgURL:
        "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "Rs. 2999",
      newPrice: "Rs. 2499",
    },
    {
      itemName: "Instant Pot Duo",
      itemDesc: "7-in-1 Multi-Use Cooker",
      imgURL:
        "https://images.unsplash.com/photo-1556911820-1238441ed1a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      oldPrice: "Rs. 3999",
      newPrice: "Rs. 3499",
    },
    {
      itemName: "Fitbit Charge 4",
      itemDesc: "Fitness Tracker with GPS",
      imgURL:
        "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "Rs. 2499",
      newPrice: "Rs. 1999",
    },
    {
      itemName: "Levi's 501 Jeans",
      itemDesc: "Classic Fit, Various Sizes",
      imgURL:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      oldPrice: "Rs. 1499",
      newPrice: "Rs. 1299",
    },
    // Add more items here
  ];

  return (
    <div className="">
      <span className="font-medium">Hot Deals</span>
      <div>
        {hotDealCards.map((data) => (
          <HotDealCard
            itemName={data.itemName}
            itemDesc={data.itemDesc}
            imgURL={data.imgURL}
            oldPrice={data.oldPrice}
            newPrice={data.newPrice}
          />
        ))}
      </div>
    </div>
  );
}
