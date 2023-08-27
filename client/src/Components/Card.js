import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="h-full relative border border-none rounded-2xl overflow-hidden">
      <img
        className="object-cover h-full w-full "
        src={props.obj.imageURL}
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white bg-black bg-opacity-50">
        <span className="text-3xl my-4 font-medium">{props.obj.title}</span>
        <Link
          to={props.obj.link}
          className="bg-primary px-4 py-2 border border-none rounded-lg hover:bg-primary_hover"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
