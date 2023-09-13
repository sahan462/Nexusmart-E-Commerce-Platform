import HotDealCard from "./HotDealCard";

export default function HotDealsList(props) {
  return (
    <div className="">
      <span className="font-medium">Hot Deals</span>
      <div>
        {props.data.map((data) => (
          <HotDealCard
            itemID={data._id}
            itemName={data.title}
            itemDesc={data.overview.substring(0, 20) + "..."}
            imgURL={data.imgURL}
            oldPrice={data.price}
            newPrice={data.discount ? data.discount.newPrice : data.price}
          />
        ))}
      </div>
    </div>
  );
}
