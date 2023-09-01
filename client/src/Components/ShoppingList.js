import ShoppingCard from "./ShoppingCard";

export default function ShoppingList(props) {
  return (
    <div className="w-full grid grid-cols-12 gap-6">
      {props.data.map((card) => (
        <div className="col-span-3">
          <ShoppingCard
            itemID={card._id}
            title={card.title}
            imgURL={card.imgURL}
            noOfStars={card.noOfStars}
            newPrice={card.discount ? card.discount.newPrice : card.price}
            oldPrice={card.price}
            percentage={card.discount ? card.discount.percentage : 0}
          />
        </div>
      ))}
    </div>
  );
}
