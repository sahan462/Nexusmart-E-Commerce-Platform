import Loading from "./Loading";
export default function Alert(props) {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="text-lg  bg-blue-400 py-4 px-6 border border-none rounded-full text-white flex justify-center">
          {props.msg}
        </div>
      </div>
      <div>
        <Loading msg={`Redirecting to the ${props.where}`} />
      </div>
    </div>
  );
}
