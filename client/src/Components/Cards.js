import Card from "./Card";

export default function Cards() {
  const cardObj1 = {
    imageURL:
      "https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80",
    title: "Kitchen Tools and Gadgets",
    link: "/",
  };
  const cardObj2 = {
    imageURL:
      "https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    title: "Computers and Accesories",
    link: "/",
  };
  const cardObj3 = {
    imageURL:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Sneakers",
    link: "/",
  };
  return (
    // props.title, props.imageURL, props.link
    <div>
      <div className="mt-4 grid grid-cols-12 gap-5">
        <div className="h-80  col-span-6 row-span-2">
          {<Card obj={cardObj1} />}
        </div>
        <div className="h-80 col-span-6 grid grid-rows-2 gap-3 ">
          <div className="h-full">{<Card obj={cardObj2} />}</div>
          <div className="h-full  ">{<Card obj={cardObj3} />}</div>
        </div>
      </div>
    </div>
  );
}
