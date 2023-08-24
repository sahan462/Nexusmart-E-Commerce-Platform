import ShoppingCard from "./ShoppingCard";
export default function ShoppingList() {
  const shoppingCardData = [
    {
      title: "Casio AX404",
      imgURL:
        "https://images.unsplash.com/photo-1680509246036-ce5f09e1f51f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzaW8lMjB3YXRjaGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      oldPrice: "9000",
      newPrice: "2999",
      percentage: "33",
      noOfStars: 3,
    },
    {
      title: "Galaxy S21",
      imgURL:
        "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      oldPrice: "12500",
      newPrice: "9999",
      percentage: "20",
      noOfStars: 4,
    },
    {
      title: "Apple AirPods Pro",
      imgURL:
        "https://images.unsplash.com/photo-1603680373177-e762186bdc3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "2499",
      newPrice: "1999",
      percentage: "20",
      noOfStars: 4,
    },
    {
      title: "Sony PlayStation 5",
      imgURL:
        "https://images.unsplash.com/photo-1622297845908-866f3677350e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "45999",
      newPrice: "39999",
      percentage: "13",
      noOfStars: 5,
    },
    {
      title: "Dell XPS 13 Laptop",
      imgURL:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      oldPrice: "89999",
      newPrice: "79999",
      percentage: "11",
      noOfStars: 4,
    },
    {
      title: "Samsung 55-inch TV",
      imgURL:
        "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "54999",
      newPrice: "47999",
      percentage: "13",
      noOfStars: 4,
    },
    {
      title: "Nike Air Max",
      imgURL:
        "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "2999",
      newPrice: "2499",
      percentage: "17",
      noOfStars: 3,
    },
    {
      title: "Instant Pot Duo",
      imgURL:
        "https://images.unsplash.com/photo-1556911820-1238441ed1a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      oldPrice: "3999",
      newPrice: "3499",
      percentage: "12",
      noOfStars: 4,
    },
    {
      title: "Fitbit Charge 4",
      imgURL:
        "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      oldPrice: "2499",
      newPrice: "1999",
      percentage: "20",
      noOfStars: 4,
    },
    {
      title: "Levi's 501 Jeans",
      imgURL:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      oldPrice: "1499",
      newPrice: "1299",
      percentage: "13",
      noOfStars: 4,
    },
  ];

  return (
    <div className="h-screen  w-full grid grid-cols-12 gap-6">
      {shoppingCardData.map((card) => (
        <div className="col-span-3">
          <ShoppingCard
            title={card.title}
            imgURL={card.imgURL}
            noOfStars={card.noOfStars}
            newPrice={card.newPrice}
            oldPrice={card.oldPrice}
            percentage={card.percentage}
          />
        </div>
      ))}
      {shoppingCardData.map((card) => (
        <div className="col-span-3">
          <ShoppingCard
            title={card.title}
            imgURL={card.imgURL}
            noOfStars={card.noOfStars}
            newPrice={card.newPrice}
            oldPrice={card.oldPrice}
            percentage={card.percentage}
          />
        </div>
      ))}
    </div>
  );
}
