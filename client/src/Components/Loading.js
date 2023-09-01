import loadingImg from "./../assets/loading.gif";
export default function Loading(props) {
  return (
    <div className="flex justify-center items-center h-60">
      <div className="">
        <div className="flex justify-center mb-2">
          <img src={loadingImg} className="h-20 w-20" />
        </div>
        <span className="flex justify-center items-center text-gray-500">
          {props.msg ? props.msg : "Loading"}
        </span>
      </div>
    </div>
  );
}
